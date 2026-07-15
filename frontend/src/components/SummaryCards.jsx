function SummaryCards({ prices, changePoint, events }) {
  if (prices.length === 0) {
    return <p>Loading summary...</p>;
  }

  const currentPrice = prices[prices.length - 1].Price;

  const highestPrice = Math.max(...prices.map((p) => Number(p.Price)));

  const lowestPrice = Math.min(...prices.map((p) => Number(p.Price)));

  
  return (
    <div className="summary-container">
      <div className="summary-card">
        <h3>Current Price</h3>
        <p>${currentPrice}</p>
      </div>

      <div className="summary-card">
        <h3>Highest Price</h3>
        <p>${highestPrice}</p>
      </div>

      <div className="summary-card">
        <h3>Lowest Price</h3>
        <p>${lowestPrice}</p>
      </div>

      <div className="summary-card">
        <h3>Change Point</h3>
        <p>{changePoint}</p>
      </div>

      <div className="summary-card">
        <h3>Events</h3>
        <p>{events.length}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
