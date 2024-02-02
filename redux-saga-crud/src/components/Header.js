import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const result = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-Comm</h1>
      </Link>
      <div className="search-box">
        <input type="text" placeholder="Search Product" />
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}
