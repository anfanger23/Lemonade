import { useState } from "react";
import "./index.css";

export default function LemonStand() {
  const [profit, setProfit] = useState(0);

  const handleSell = () => setProfit(profit + 5);
  const handleBuy = () => setProfit((prev) => Math.max(0, prev - 2));

  return (
    <div className="lemon-stand">
      <h1 className="title">🍋Lemonade Stand🍋</h1>
      <p className="profit">Profit: ${profit}</p>
      <div className="buttons">
        <button onClick={handleSell} className="sell-button">
          Sell Lemonade ($5)
        </button>
        <button onClick={handleBuy} className="buy-button">
          Buy Lemons ($2)
        </button>
      </div>
    </div>
  );
}
