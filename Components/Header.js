import Link from "next/link";
import React from "react";
import Cart from "./Context/Cart";
export default function Header({
  productCart,
  deleteProduct,
  editCart,
  quantity,
  handleRangeChnage,
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Online Shopping
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto  -2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Cart
              productCart={productCart}
              deleteProduct={deleteProduct}
              editCart={editCart}
              quantity={quantity}
              handleRangeChnage={handleRangeChnage}
            />
          </span>
        </div>
      </div>
    </nav>
  );
}
