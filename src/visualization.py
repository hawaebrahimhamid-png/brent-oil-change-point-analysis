import numpy as np

def calculate_log_returns(df):
    df["Log_Return"] = np.log(df["Price"] / df["Price"].shift(1))
    return df


def calculate_volatility(df, window=30):
    df["Rolling_Volatility"] = (
        df["Log_Return"].rolling(window).std()
    )
    return df
