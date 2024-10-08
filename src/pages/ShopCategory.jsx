import React from 'react'
import SingleProduct from '../components/SingleProduct'

export default function ShopCategory() {
  return (
   <>   
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h2>Shop Category</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <a href="index.html">Home</a>
              <a href="category.html">Shop</a>
              <a href="category.html">Women Fashion</a>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="cat_product_area section_gap">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9">
            <div className="product_top_bar">
              <div className="left_dorp">
                <select className="sorting">
                  <option value="1">Default sorting</option>
                  <option value="2">Default sorting 01</option>
                  <option value="4">Default sorting 02</option>
                </select>
                <select className="show">
                  <option value="1">Show 12</option>
                  <option value="2">Show 14</option>
                  <option value="4">Show 16</option>
                </select>
              </div>
            </div>
            
            <div className="latest_product_inner">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <SingleProduct />
                </div>
                <div className="col-lg-4 col-md-6">
                  <SingleProduct />
                </div>
                <div className="col-lg-4 col-md-6">
                  <SingleProduct />
                </div>
                <div className="col-lg-4 col-md-6">
                  <SingleProduct />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="left_sidebar_area">
              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Browse Categories</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <a href="#">Frozen Fish</a>
                    </li>
                    <li>
                      <a href="#">Dried Fish</a>
                    </li>
                    <li>
                      <a href="#">Fresh Fish</a>
                    </li>
                    <li>
                      <a href="#">Meat Alternatives</a>
                    </li>
                    <li>
                      <a href="#">Fresh Fish</a>
                    </li>
                    <li>
                      <a href="#">Meat Alternatives</a>
                    </li>
                    <li>
                      <a href="#">Meat</a>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Product Brand</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <a href="#">Apple</a>
                    </li>
                    <li>
                      <a href="#">Asus</a>
                    </li>
                    <li className="active">
                      <a href="#">Gionee</a>
                    </li>
                    <li>
                      <a href="#">Micromax</a>
                    </li>
                    <li>
                      <a href="#">Samsung</a>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Color Filter</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <a href="#">Black</a>
                    </li>
                    <li>
                      <a href="#">Black Leather</a>
                    </li>
                    <li className="active">
                      <a href="#">Black with red</a>
                    </li>
                    <li>
                      <a href="#">Gold</a>
                    </li>
                    <li>
                      <a href="#">Spacegrey</a>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Price Filter</h3>
                </div>
                <div className="widgets_inner">
                  <div className="range_item">
                    <div id="slider-range"></div>
                    <div className="">
                      <label for="amount">Price : </label>
                      <input type="text" id="amount" readonly />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
