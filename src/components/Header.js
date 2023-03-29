// import { Link } from "react-router-dom";
// import React from "react";

// const Header = () => {

//     return (
//         <div>
//             <Link to='/home'>Home </Link>
//             <Link to='/blogs'>Blogs </Link>
//             <Link to='/parent'>Parent </Link>
//             <Link to='/login'>Login</Link>
//         </div>

//     );
// };
// export default Header;


import { Link } from "react-router-dom";
import React from "react";

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src="https://cdn.theforage.com/vinternships/companyassets/m7GusTmDpDcGMcp28/a7QBYATxBtRiExiZ8/1625078690042/DEL_SEC_RGB_aw%20(White%20Logo)v2.png"
                            height="22px" alt="Deloitte" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blogs'>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/parent'>Parent</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;