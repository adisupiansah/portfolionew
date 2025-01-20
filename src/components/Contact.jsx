import React from "react";
import { FaUserAlt } from "react-icons/fa";
import gambarContact from "/public/img/contact.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="form-contact">
              <div className="row flex justify-center items-center">
                <h2 className="text-center">Contact Me</h2>
                <div className="col-md-10">
                  <form action="">
                    <div className="group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                    <div className="group mt-4">
                      <input
                        type="text"
                        placeholder="From"
                        className="form-control"
                      />
                    </div>

                    <div className="group mt-4">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                
                        style={{ height: "200px" }}
                      ></textarea>
            
                    </div>
                    <div className="group flex justify-center items-center mt-4">
                      <button className="btn col-md-4">submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
