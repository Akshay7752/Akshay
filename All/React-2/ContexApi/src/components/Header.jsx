import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slices/CartSlices";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems.length;

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="menu">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/shop">Shop Page</Link>
            </div>
            <div className="navbar">
              <h4>Redux Shopping Cart</h4>
              <div className="nav_menu">
                <div
                  title="Cart"
                  className="cart_icon"
                  onClick={() => handleOpenCart(true)}
                >
                  <img src="/images/bag-icon.svg" alt="bag-icon" />
                  <span className="badge">{cartQuantity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;