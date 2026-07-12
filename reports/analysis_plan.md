# Brent Oil Price Change Point Analysis

## Analysis Workflow

1. Load Data
   - Import the Brent oil price dataset.
   - Convert the `Date` column to datetime format.
   - Inspect the data for missing values and basic statistics.

2. Exploratory Data Analysis (EDA)
   - Visualize historical oil prices.
   - Plot the price distribution.
   - Detect outliers using a boxplot.
   - Analyze long-term trends with a rolling mean.

3. Trend Analysis
   - Identify long-term upward or downward trends.
   - Highlight major increases and decreases in price.

4. Stationarity Analysis
   - Perform the Augmented Dickey-Fuller (ADF) test.
   - Determine whether the time series is stationary.

5. Volatility Analysis
   - Compute log returns.
   - Calculate rolling volatility.
   - Identify periods of high and low market volatility.

6. Research Historical Events
   - Collect major geopolitical and economic events.
   - Save the events in `events.csv`.

7. Bayesian Change Point Modeling
   - Build a Bayesian model using PyMC.
   - Detect structural change points in the oil price series.

8. Interpretation
   - Compare detected change points with historical events.
   - Explain the possible causes of price changes.

9. Dashboard
   - Develop an interactive dashboard with Flask.
   - Display oil prices, detected change points, and historical events.
