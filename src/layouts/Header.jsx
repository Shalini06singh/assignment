import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header_area">
      <div className="top_menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="float-left">
                <p>Phone: +01 256 25 235</p>
                <p>email: e-commerce@eiser.com</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="float-right">
                <ul className="right_side">
                  <li>
                    <a href="cart.html">
                      gift card
                    </a>
                  </li>
                  <li>
                    <a href="tracking.html">
                      track order
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light w-100">
            <Link className="navbar-brand logo_h" to="/">
              Ecommerce
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
              <div className="row w-100 mr-0">
                <div className="col-lg-7 pr-0">
                  <ul className="nav navbar-nav center_nav pull-right">
                    <li className="nav-item">
                      <Link className="nav-link" to="/shop-category">Shop</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/product-detail">Product Detail</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/profile">Admin</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-5 pr-0">
                  <ul className="nav navbar-nav navbar-right right_nav pull-right">
                    <li className="nav-item">
                      <Link to="/cart" className="icons">
                        <i className="ti-shopping-cart"></i>
                      </Link>
                    </li>

                    <li className="nav-item submenu dropdown">
                      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="ti-user" aria-hidden="true" style={{
                          marginLeft: "20px"
                        }}></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="category.html">Shop Category</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="single-product.html">Product Details</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="checkout.html">Product Checkout</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="cart.html">Shopping Cart</a>
                        </li>
                      </ul>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
