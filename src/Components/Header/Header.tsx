import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import logo from '../Images/shad-pic.jpg';

const Header = () => {
    return (
        <Router>
            <div className="header">
                <Link to="/" className="home-link">
                    <div className="left">
                        <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 logo-sign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <div className="title">
                            <h1>Welcome to <strong>Shad Reza's</strong> World!</h1>
                        </div>
                    </div>
                </Link> 
                <div className="right">
                    <Link  className="links" to="/">
                        home
                    </Link>
                    <Link  className="links" to="/blogs">
                        blogs
                    </Link>
                    <Link  className="links" to="/works">
                        works
                    </Link>
                    <Link  className="links" to="/contact me">
                        contact me
                    </Link>
                </div>
            </div>
        </Router>
    );
};

export default Header;