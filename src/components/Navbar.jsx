import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-gw">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="col-md-4">
              <div className="card-navbar">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <Link className='nav-link' href={"/"}>Home</Link>
                  <Link className='nav-link' href={"/"}>About</Link>
                  <Link className='nav-link' href={"/"}>Project</Link>
                  <Link className='nav-link' href={"/"}>Contact</Link>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
