# backend/main.py
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend for server environments

import logging, re
from fastapi import FastAPI, HTTPException, Query
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import matplotlib.pyplot as plt

app = FastAPI()

# Configure CORS middleware
origins = [
    "http://localhost:3000",  # Your Next.js app URL
    "http://127.0.0.1:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # or ["*"] to allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OPTIONAL: Define mappings for known synonyms (adjust as needed)
BLOCK_MAPPING = {
    # "blck a": "Block A",
}
CAFE_MAPPING = {
    # "mcd": "McDonald's",
}

def standardize_string(value: str) -> str:
    if not isinstance(value, str):
        return ""
    value = value.lower().strip()
    value = re.sub(r"\s+", " ", value)
    return value.title()

def apply_mapping(value: str, mapping: dict) -> str:
    return mapping.get(value.lower(), value)

@app.get("/")
def read_root():
    return {"message": "Welcome to the RateMyBite Analytics API!"}

@app.get("/analysis_detailed")
def get_detailed_analysis(block: str = Query(None, description="Filter by block name")):
    try:
        # Published CSV URL from Google Sheets – update with your actual URL
        csv_url = (
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsBEgfVMl3XUVTe1U861iK-NTgC_Tb-s133L6K2D7P71mo8lzlWs06zqpXhMv4sJeQOLtjWfNIFr6L/pub?output=csv"
        )
        df = pd.read_csv(csv_url)

        # Debug prints (optional)
        print("=== DEBUG INFO ===")
        print("Columns in DF:", list(df.columns))
        print("First 5 rows:\n", df.head())
        print("DF shape:", df.shape)
        print("=================\n")

        # Expected columns based on your sheet:
        expected_columns = [
            "Choose the Block:",
            "Hostel Cafes (if)",
            "How much do you spend?",
            "Which restaurant/cafe you love the most?",
            "How would you describe the taste and quality of food?",
            "How satisfied are you with the variety of food choices?  "
        ]
        for col in expected_columns:
            if col not in df.columns:
                raise ValueError(f"Expected column '{col}' not found. Available columns: {list(df.columns)}")

        # Create a unified "Location" column
        df["Location"] = df["Choose the Block:"].fillna("").str.strip()
        df.loc[df["Location"] == "", "Location"] = df["Hostel Cafes (if)"].fillna("").str.strip()
        df["Location"] = df["Location"].apply(standardize_string)
        df["Location"] = df["Location"].apply(lambda x: apply_mapping(x, BLOCK_MAPPING))

        # Standardize the Cafe name
        df["CafeName"] = df["Which restaurant/cafe you love the most?"].fillna("").apply(standardize_string)
        df["CafeName"] = df["CafeName"].apply(lambda x: apply_mapping(x, CAFE_MAPPING))

        # Combine into one "Cafe_Location"
        df["Cafe_Location"] = df["Location"] + " - " + df["CafeName"]

        # Convert numeric columns
        df["Cost"] = pd.to_numeric(
            df["How much do you spend?"].replace(r"[\$,]", "", regex=True),
            errors="coerce"
        )
        df["Taste"] = pd.to_numeric(
            df["How would you describe the taste and quality of food?"],
            errors="coerce"
        )
        df["Satisfaction"] = pd.to_numeric(
            df["How satisfied are you with the variety of food choices?  "].str.strip(),
            errors="coerce"
        )

        # Filter by block if provided
        if block:
            block_std = standardize_string(block)
            df = df[df["Location"].str.contains(block_std, case=False, na=False)]
            print(f"Filtered by block='{block}', new shape:", df.shape)

        if df.empty:
            raise ValueError("No data found after applying filters. Please check block name or data.")

        # Identify the most rated cafe (optional)
        cafe_group = df.groupby("Cafe_Location")["Satisfaction"].agg(["mean", "count"]).reset_index()
        cafe_group = cafe_group[cafe_group["count"] >= 3]
        most_rated = cafe_group.sort_values("mean", ascending=False).iloc[0] if not cafe_group.empty else None
        if most_rated is not None:
            logging.info(
                f"Most rated cafe: {most_rated['Cafe_Location']} (Avg. Satisfaction: {most_rated['mean']:.2f}, Reviews: {most_rated['count']})"
            )

        # Create a 2x2 figure with charts
        fig, axs = plt.subplots(2, 2, figsize=(16, 12))

        # Chart 1: Average Satisfaction by Block/Hostel
        loc_group = df.groupby("Location")["Satisfaction"].agg(["mean", "count"]).reset_index().sort_values("mean")
        axs[0, 0].bar(loc_group["Location"], loc_group["mean"], color="mediumseagreen")
        axs[0, 0].set_title("Average Satisfaction by Block/Hostel")
        axs[0, 0].set_xlabel("Block/Hostel")
        axs[0, 0].set_ylabel("Avg. Satisfaction")
        axs[0, 0].tick_params(axis="x", rotation=45)

        # Chart 2: Average Cost by Block/Hostel
        cost_group = df.groupby("Location")["Cost"].mean().reset_index().sort_values("Cost")
        axs[0, 1].bar(cost_group["Location"], cost_group["Cost"], color="lightskyblue")
        axs[0, 1].set_title("Average Cost by Block/Hostel")
        axs[0, 1].set_xlabel("Block/Hostel")
        axs[0, 1].set_ylabel("Avg. Cost")
        axs[0, 1].tick_params(axis="x", rotation=45)

        # Chart 3: Review Count by Cafe (with Block)
        cafe_count = df.groupby("Cafe_Location").size().reset_index(name="count").sort_values("count", ascending=False)
        axs[1, 0].bar(cafe_count["Cafe_Location"], cafe_count["count"], color="salmon")
        axs[1, 0].set_title("Review Count by Cafe (with Block)")
        axs[1, 0].set_xlabel("Cafe (Block)")
        axs[1, 0].set_ylabel("Review Count")
        axs[1, 0].tick_params(axis="x", rotation=90)

        # Chart 4: Taste Rating Distribution
        if pd.api.types.is_numeric_dtype(df["Taste"]):
            axs[1, 1].hist(df["Taste"].dropna(), bins=10, color="orchid")
            axs[1, 1].set_title("Taste Rating Distribution")
            axs[1, 1].set_xlabel("Taste Rating")
            axs[1, 1].set_ylabel("Frequency")
        else:
            axs[1, 1].text(0.5, 0.5, "Taste ratings are categorical", horizontalalignment="center", verticalalignment="center")
            axs[1, 1].axis("off")

        plt.tight_layout()
        plt.savefig("detailed_analysis.png")
        plt.close(fig)

        return FileResponse("detailed_analysis.png", media_type="image/png")

    except Exception as e:
        logging.exception("Error generating detailed analysis")
        raise HTTPException(status_code=500, detail=str(e))
