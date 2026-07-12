# Brent Oil Change Point Analysis

## Project Overview

This project analyzes historical Brent crude oil prices to identify structural changes associated with major geopolitical and economic events. The analysis combines exploratory data analysis, time series techniques, and Bayesian change point modeling to detect significant shifts in oil price behavior.

## Analysis Workflow

```
Data
 ↓
Cleaning
 ↓
EDA
 ↓
Trend Analysis
 ↓
Stationarity
 ↓
Volatility
 ↓
Bayesian Change Point Model
 ↓
Dashboard
```

## Project Structure

```
brent-oil-change-point-analysis/
├── data/
│   └── raw/
│       ├── BrentOilPrices.csv
│       └── events.csv
├── notebooks/
│   └── task1_analysis.ipynb
├── reports/
├── src/
├── requirements.txt
└── README.md
```

## Technologies

* Python
* Pandas
* NumPy
* Matplotlib
* Seaborn
* Statsmodels
* PyMC
* Jupyter Notebook

## Objectives

* Analyze historical Brent oil price trends.
* Explore stationarity and volatility patterns.
* Identify structural breaks using Bayesian change point analysis.
* Relate detected changes to major global events.
* Present insights through an interactive dashboard.
