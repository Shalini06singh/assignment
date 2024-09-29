import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductStart } from '../../../redux/action/product.action';

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductStart())
  },[])
  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Products</div>
        <div><Link to="/admin/products/create" className='btn btn-success'>Add Product</Link></div>
      </div>
      <div className="card-body ">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  )
}
