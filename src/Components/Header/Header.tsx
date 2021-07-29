import React from 'react';
import './Header.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../Images/shad.png';

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <div className="logo">
                <LazyLoadImage
                        alt={"shadreza"}
                        src={logo}
                    />
                </div>
                <div className="title">

                </div>
            </div>
            <div className="right">
                <div className="links">

                </div>
            </div>
        </div>
    );
};

export default Header;