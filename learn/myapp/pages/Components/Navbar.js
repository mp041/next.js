// import React from 'react'
import styles from "../../styles/Home.module.css";
// import Head from "next/head";
import Link from "next/link";
// import Badge from "react-bootstrap/Badge";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mihir
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link href="/blog/home" className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
              <Link href="/blog/contact" className="nav-item">
                <a className="nav-link">Contact</a>
              </Link>
              <Link href="/blog/about" className="nav-item">
                <a className="nav-link">About</a>
              </Link>
              <Link href="/blog/demo" className="nav-item">
                <a className="nav-link">Demo</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
