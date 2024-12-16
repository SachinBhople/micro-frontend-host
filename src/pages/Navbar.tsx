import React from 'react'
import { Link } from 'react-router-dom'
import { useGetcartProductQuery } from 'cart/cartApi'
import { useLogoutMutation } from 'auth/authApi'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Navbar = () => {
    const { user } = useSelector<RootState, any>(state => state.auth)
    const { data } = useGetcartProductQuery(user && user._id)
    const [logout] = useLogoutMutation()

    return <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/cart/pro" className="navbar-brand" >E-Com</Link>
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
                            <Link to="/cart/pro" className="nav-link active" aria-current="page" >Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/cart/cart'>
                                <i className="bi bi-cart"></i> Cart <span className="badge bg-primary">{data && data.result.length}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/order'>
                                Order                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/auth/" className="nav-link active" aria-current="page" >Auth</Link>
                        </li>
                        <li className="nav-item align-self-center">
                            <button onClick={logout} className='logout p-1 rounded-lg px-2 bg-primary'>logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar