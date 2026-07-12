from src.data_loader import load_brent_data


def test_load_data():

    df = load_brent_data(
        "data/raw/BrentOilPrices.csv"
    )

    assert df is not None
    assert len(df) > 0
    assert "Price" in df.columns
