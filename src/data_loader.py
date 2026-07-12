import pandas as pd


def load_brent_data(path):

    try:
        df = pd.read_csv(path)

        df["Date"] = pd.to_datetime(df["Date"])

        df = df.sort_values("Date")

        df.set_index("Date", inplace=True)

        return df


    except Exception as e:
        raise Exception(f"Error loading data: {e}")
