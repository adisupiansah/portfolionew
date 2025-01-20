import Image from "next/image";
import React from "react";
import profile from "/public/img/logo.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="title container">About Me</h3>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="img-profile d-flex justify-content-center align-items-center">
                      <Image
                        src={profile}
                        alt="profile adi supiansah"
                        width={300}
                        height={300}
                        className="rounded-circle profile"
                      />
                    </div>
                  </div>
                  <div className="col-md-6  d-flex justify-content-center align-items-center">
                    <div className="text-about">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque incidunt, aspernatur asperiores ratione cumque
                        vero libero tempore delectus repudiandae quos voluptates
                        voluptatum pariatur nihil ipsum excepturi culpa tenetur?
                        Itaque, ea!
                      </p>
                      <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque incidunt, aspernatur asperiores ratione cumque
                        vero libero tempore delectus repudiandae quos voluptates
                        voluptatum pariatur nihil ipsum excepturi culpa tenetur?
                        Itaque, ea!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
