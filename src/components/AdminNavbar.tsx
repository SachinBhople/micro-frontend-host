import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {


    return <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/cart/pro" className="navbar-brand" >Admin panel</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/admin/product" className="nav-link active" aria-current="page" >Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/admin/order'>
                                Order
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/admin/user'>
                                User                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/add-product" className="nav-link active" aria-current="page" >Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/return-request" className="nav-link active" aria-current="page" > return-request</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/userDetails" className="nav-link active" aria-current="page" > /return-request</Link>
                        </li>
                        <li className="nav-item align-self-center">
                            <button className='logout p-1 rounded-lg px-2 bg-primary'>logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar