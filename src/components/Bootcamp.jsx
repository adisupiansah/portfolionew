import React from "react";
import Image from "next/image";

const Bootcamp = ({bootcamp}) => {
  return (
    <div className="tools">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <h3 className="col-md-12">
            <div className="title-tools">
              <span className="garis-title-tools"></span>Bootcamp
            </div>
            <div className="row ">
              <div className="col-md-12">
                {bootcamp.map((data, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="d-flex flex-column flex-md-row">
                      <div className="col-md-4">
                        <Image
                          src={data.img}
                          className="img-fluid rounded-start"
                          alt="gambar-experience"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Name Bootcamp: {data.nama}</h5>
                          <p className="card-text mt-3">
                            Description: {data.deskripsi}
                          </p>
                          <p className="card-text mt-3">
                            Year: {data.tahun}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
