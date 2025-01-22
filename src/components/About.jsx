import Image from "next/image";
import React from "react";
import profile from "/public/img/adi.jpg";
import Link from "next/link";
import 'animate.css';

const About = () => {
  const urlGithub = "https://github.com/adisupiansah"
  const urlProjectThisWebsite = "/project"
  
  return (
    <div className="about">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="title container animate__animated animate__fadeInDown animate__fast">About Me</h3>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="img-profile d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft animate__fast">
                      <Image
                        src={profile}
                        alt="profile adi supiansah"
                        width={250}
                        height={250}
                        className="rounded-circle profile"
                      />
                    </div>
                  </div>
                  <div className="col-md-6  d-flex justify-content-center align-items-center">
                    <div className="text-about animate__animated animate__fadeInUp animate__fast">
                      <p>
                        Hi everyone, let me introduce myself, my name is Adi
                        Supiansyah. I live in Riau Islands Province, Karimun
                        Regency, West Meral District, Darussalam Village, Lembah
                        Permai RT02/RW02.
                      </p>
                      <p className="mt-3">
                        I am a web developer with 3 years of experience in the
                        logistics administration of the National Police, where I
                        am used to handling various administrative and data
                        management tasks with high efficiency. Apart from that,
                        I also have experience as a freelance fullstack web
                        developer and am still active today.
                      </p>
                      <p className=" mt-3">
                        I have completed many projects for clients with
                        satisfactory results. To see my portfolio and work,
                        please visit <Link href={urlGithub} className='text-blue-500' target='_blank'>my GitHub account</Link> or the <Link href={urlProjectThisWebsite} className='text-blue-500'>Project menu</Link> on
                        this website.
                      </p>
                      <p className="mt-4">Thank you, nice to meet you!</p>
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
