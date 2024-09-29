import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Side Bar</li>
            <li className="list-group-item">
                <Link to="/admin/profile">Profile</Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/category">Category</Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/products">Products</Link>
            </li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    )
}
