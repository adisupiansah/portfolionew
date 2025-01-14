import React from "react";
import Image from "next/image";
import logoAdi from "/public/img/logo.jpeg";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar p-3">
        <div className="container">
          <a className="navbar-brand d-flex justify-content-center align-items-center" href="#">
            <Image
              src={logoAdi}
              height={50}
              width={50}
              alt="adi supiansah"
              className="rounded-circle"
            />
            <span className="text-light mx-2">adi supiansah</span>
          </a>
          <div className="icon-github">
            <Link href='https://github.com/adisupiansah' target="_blank">
              <FaGithub className="icon"/>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
