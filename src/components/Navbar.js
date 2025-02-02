import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/general">NewsShorts</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/general">Home</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/general">General</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/technology">Technology</Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
}
