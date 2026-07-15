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

# Bayesian Change Point Analysis of Brent Oil Prices

## Overview

This project applies Bayesian change point detection to identify structural changes in Brent crude oil price behavior.

The goal is to detect periods where the statistical properties of oil returns changed and investigate possible real-world causes.

## Objectives

- Analyze Brent oil price trends
- Calculate and study daily log returns
- Build a Bayesian change point model using PyMC
- Identify structural breaks in oil market behavior
- Quantify the impact before and after detected changes
- Relate detected changes to historical oil market events

## Dataset

Dataset:
- Brent Oil Prices

Features:
- Date
- Price

The data contains historical daily Brent crude oil prices.

## Methodology

### 1. Data Preparation

- Loaded Brent oil price data
- Converted dates into datetime format
- Calculated daily log returns:

```
log(price_t) - log(price_t-1)
```

- Removed missing values

### 2. Exploratory Data Analysis

Performed:

- Brent oil price trend visualization
- Log return analysis
- Volatility observation

### 3. Bayesian Change Point Model

A PyMC Bayesian model was developed.

Model components:

- `tau`: Unknown change point location
- `mu_1`: Mean return before change
- `mu_2`: Mean return after change
- `sigma`: Return volatility

The model uses:

- Discrete Uniform prior for change point
- `pm.math.switch()` to change the mean after tau
- Normal likelihood for log returns

### 4. MCMC Sampling

The model was estimated using PyMC MCMC sampling.

Sampling configuration:

- Draws: 100
- Tune: 100
- Chains: 1

Diagnostics were checked using:

- Posterior summary
- Trace plots
- Posterior distributions

## Results

The Bayesian model detected a structural break around:

**25 May 1989**

The estimated change in average daily log returns:

Before change point:

```
-0.015%
```

After change point:

```
+0.037%
```

The difference represents approximately:

```
+0.052% improvement in average daily return
```

Estimated volatility:

```
sigma ≈ 0.029
```

## Interpretation

The detected change point occurred during the recovery period after the 1986 oil price collapse.

Possible contributing factors include:

- OPEC production policies
- Improving global oil demand
- Market expectation changes

The model identifies a statistical relationship but cannot prove a single causal event.

## Visualizations

The notebook includes:

- Brent oil price trend
- Log return behavior
- Trace plots
- Posterior distribution of change point
- Posterior distributions of model parameters
- Brent price with detected change point

## Future Work

Possible improvements:

- Include macroeconomic variables:
  - GDP
  - Inflation
  - Exchange rates

- Explore advanced models:
  - VAR models for oil and economic relationships
  - Markov-Switching models for market regimes

## Tools Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- PyMC
- ArviZ
- Jupyter Notebook

## Conclusion

The Bayesian change point model successfully identified a structural shift in Brent oil price behavior.

The analysis demonstrates how probabilistic models can help energy analysts detect market transitions and support decision-making.

# Task 3: Interactive Brent Oil Change Point Dashboard

## Overview

This project implements an interactive dashboard for analyzing Brent oil price movements and visualizing the impact of major historical events.

The dashboard combines a Flask backend API with a React frontend to help stakeholders explore historical trends, Bayesian change point detection results, and event-related price movements.

---

# Project Features

## Backend (Flask)

The Flask backend provides APIs for:

### Historical Price Data

Endpoint:

```
GET /prices
```

Returns Brent oil historical price data used for visualization.

---

### Change Point Results

Endpoint:

```
GET /change-points
```

Returns detected structural change points from the Bayesian change point analysis.

---

### Event Data

Endpoint:

```
GET /events
```

Returns important historical events related to Brent oil price changes.

Examples:

* Oil market events
* Financial crises
* Conflicts
* Economic decisions

---

# Frontend (React)

The React dashboard provides:

## Interactive Price Visualization

* Historical Brent oil price chart
* Change point visualization
* Event highlighting on the timeline

## Filters

Users can:

* Select start date
* Select end date
* Explore specific periods

## Summary Indicators

The dashboard displays:

* Current Brent oil price
* Highest price
* Lowest price
* Estimated change point date
* Number of important events

---

# Technologies Used

## Backend

* Python
* Flask
* Pandas
* REST API

## Frontend

* React.js
* Recharts
* Axios
* CSS

---

# Project Structure

```
brent-oil-change-point-analysis/

│
├── backend/
│   ├── app.py
│   └── data/
│
├── frontend/
│   ├── src/
│   │   ├── PriceChart.jsx
│   │   ├── SummaryCards.jsx
│   │   └── Dashboard.css
│
├── README.md
└── requirements.txt
```

---

# Installation and Setup

## Backend Setup

Create virtual environment:

```bash
python -m venv .venv
```

Activate:

Windows:

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run Flask:

```bash
python app.py
```

Backend runs on:

```
http://127.0.0.1:5000
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start React:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Dashboard Screenshots

The dashboard includes:

* Summary cards
* Brent oil historical price chart
* Bayesian change point marker
* Event highlights
* Date filtering functionality

---

# Conclusion

This dashboard provides an interactive way to explore Brent oil price behavior and understand how major historical events relate to market changes.

It transforms analytical results into an accessible visualization tool for stakeholders.
