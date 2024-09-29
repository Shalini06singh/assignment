import React from 'react'

export default function SingleProduct() {
    return (
        <div className="single-product">
            <div className="product-img">
                <img
                    className="card-img"
                    src="img/product/inspired-product/i1.jpg"
                    alt=""
                />
                <div className="p_icon">
                    <a href="#">
                        <i className="ti-eye"></i>
                    </a>
                    <a href="#">
                        <i className="ti-heart"></i>
                    </a>
                    <a href="#">
                        <i className="ti-shopping-cart"></i>
                    </a>
                </div>
            </div>
            <div className="product-btm">
                <a href="#" className="d-block">
                    <h4>Latest men’s sneaker</h4>
                </a>
                <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                </div>
            </div>
        </div>
    )
}
