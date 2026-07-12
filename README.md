# Brent Oil Change Point Analysis — Task 1

## Overview

This task focuses on preparing and exploring Brent oil price data for change point analysis. The goal is to understand historical price behavior, identify trends, analyze volatility, and prepare the data for Bayesian change point modeling.

## Objectives

- Load and clean Brent oil price data
- Perform exploratory data analysis (EDA)
- Analyze historical price trends
- Check stationarity using the Augmented Dickey-Fuller (ADF) test
- Analyze volatility using log returns
- Research major historical events affecting oil prices
- Document assumptions and change point modeling concepts

## Project Structure

```
brent-oil-change-point-analysis/
│
├── data/
│   └── raw/
│       ├── BrentOilPrices.csv
│       └── events.csv
│
├── notebooks/
│   └── task_1_eda.ipynb
│
├── reports/
│   ├── analysis_plan.md
│   ├── assumptions.md
│   └── change_point_notes.md
│
└── README.md
```

## Analysis Steps

1. Load Brent oil price data
2. Convert dates and inspect the dataset
3. Perform EDA:
   - Historical price visualization
   - Price distribution analysis
   - Outlier detection
   - Rolling mean trend analysis
4. Analyze trends and market behavior
5. Test stationarity using ADF test
6. Calculate log returns and study volatility
7. Collect major oil market events
8. Prepare for Bayesian change point modeling

## Tools Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Statsmodels
- PyMC
- ArviZ
- Jupyter Notebook

## Key Findings

The analysis identified changes in Brent oil price behavior over time, including periods of high volatility and significant market movements. These observations will support the next stage of Bayesian change point modeling.

## Next Steps

Build a Bayesian Change Point Model to detect significant structural changes in Brent oil prices and compare detected change points with historical events.
