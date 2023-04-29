import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [error,setError]=useState('')
    const handleLogout = () => {
        logOut()
            .then(result => {
            
            })
            .catch((error) => {
                setError(error.message)
              });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {
                    user && <span className='text-white'>Welcome to {user.email} <button className='btn-logout' onClick={handleLogout}>Sign Out</button> </span>
                }
            </div>
        </nav>
    );
};

export default Header;