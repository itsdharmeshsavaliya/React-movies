import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";
import { BiTrendingUp, BiMoviePlay, BiMenu } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { logout } = useAuth0();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                        REACT PRIME VIDEO
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white active" aria-current="page" to='/'>
                                    <AiFillHome style={{ 'fontSize': '17px', 'marginBottom': '5px' }} /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/TrandingMovies">
                                    <AiFillFire style={{ 'fontSize': '18px', 'marginBottom': '5px' }} /> Trending Movies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/PopularMovies">
                                    <BiTrendingUp /> Popular Movies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/FilterMovie">
                                    <BiMenu /> Categories
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/GujaratiMovies">
                                    <BiMoviePlay /> Gujarati Movies
                                </Link>
                            </li>
                        </ul>
                        {
                            isAuthenticated ? (
                                <button type="button" className="btn btn-outline-light rounded-pill" onClick={() => logout({ returnTo: window.location.origin })}>
                                    <RiLoginBoxFill /> Log Out
                                </button>
                            )
                                :
                                (
                                    <button type="button" className="btn btn-outline-light rounded-pill" onClick={() => loginWithRedirect()}> <RiLoginBoxFill /> Log In</button>
                                )
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
