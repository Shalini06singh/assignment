import React from 'react'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

export default function Cart() {
    return (
        <>
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div
                            className="banner_content d-md-flex justify-content-between align-items-center"
                        >
                            <div className="mb-3 mb-md-0">
                                <h2>Cart</h2>
                                <p>Very us move be blessed multiply night</p>
                            </div>
                            <div className="page_link">
                                <a href="index.html">Home</a>
                                <a href="cart.html">Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                    
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="gray_btn" href="#">Update Cart</a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="cupon_text">
                                                <input type="text" placeholder="Coupon Code" />
                                                <a className="main_btn" href="#">Apply</a>
                                                <a className="gray_btn" href="#">Close Coupon</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$2160.00</h5>
                                        </td>
                                    </tr>
                                    <tr className="out_button_area">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="checkout_btn_inner">
                                                <Link className="gray_btn" to="/">Continue Shopping</Link>
                                                <Link className="main_btn" to="/checkout">Proceed to checkout</Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
