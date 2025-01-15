"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import logoAdi from "/public/img/logo.jpeg";

const Navbar = () => {
  const pathname = usePathname();

  const Active = (url) => {
    return pathname === url ? "active-navbar" : "";
  };

  return (
    <div className="navbar-gw fixed-top">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="card-navbar">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <Image
                    src={logoAdi}
                    width={40}
                    height={40}
                    className="rounded-circle"
                    alt="adi supiansah"
                  />

                  <Link className={`nav-link ${Active("/")}`} href="/">
                    Home
                  </Link>
                  <Link
                    className={`nav-link ${Active("/about")}`}
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    className={`nav-link ${Active("/project")}`}
                    href="/project"
                  >
                    Project
                  </Link>
                  <Link
                    className={`nav-link ${Active("/contact")}`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                  <Link href="https://github.com/adisupiansah" target="_blank">
                    <FaGithub className="icon" />
                  </Link>
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
