import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import "./index.css";
import Cart from "./Cart";
import FruitStand from "./FruitStand";

function Home() {
  console.log("Home component rendered");
  return (
    <h1>
      🍐🍊🍋🍆🥑🥥
      Welcome to the Fruit Stand
      🥭🍇🌭🍌🍅🍍
    </h1>
    
  );
}

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/cart">Cart ({totalCount})</Link>
    </nav>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<FruitStand />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
