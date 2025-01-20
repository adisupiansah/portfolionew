'use client'
import Image from "next/image";
import React from "react";
import foto from "/public/img/logo.jpeg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-4">
            <div className="">
                <span className="txt-halo">Hallo Guys, Im</span>
                <h1 className="txt-name">Adi Supiansah</h1>
                <h2 className="txt-job">
                    <TypeAnimation
                       sequence={[
                        "Fullstack",
                        500,
                        "Fullstack Developer",
                        500,
                        '',
                        500,
                      ]}
                    
                      repeat={Infinity}
                    />
                </h2>
                <span className="txt-desc">Welcome to My personal website</span>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="">
              <Image
                src={foto}
                width={400}
                height={400}
                alt="adisupiansah"
                className="rounded-circle img-home"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
