import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/nav-styles.css"
import Logo from '../images/Logos/Cryptowatch-slogan.PNG'
import { useLogout } from '../hooks/useLogout'
import { useUserContext } from '../hooks/useUserContext'

const Nav = () => {

    const { logout } = useLogout();
    const { user } = useUserContext();

    const handleLogout = () => {
        logout();
    }

    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <img src={Logo} alt='Logo' className='nav-logo' />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li> */}

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Home
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/">Home</Link></li>
                                <li><a class="dropdown-item" href="#about">About</a></li>
                                <li><a class="dropdown-item" href="#features">Why Join</a></li>
                                <li><a class="dropdown-item" href="#testimonials">Testimonials</a></li>
                                <li><a class="dropdown-item" href="#download">Download</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/market">Market</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div class="d-flex">
                        {!user ?
                            <div>
                                <Link to='/login'><button class="btn btn-outline-success">Log in</button></Link>
                                <Link to='/signup'><button class="btn btn-outline-success" type="submit">Sign up</button></Link>
                            </div>
                            :
                            <div className='user-login'>
                                <Link to='/dashboard'><button class="btn btn-outline-success">Dashboard</button></Link>
                                <button class="btn btn-outline-danger" onClick={handleLogout}>Log out</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav