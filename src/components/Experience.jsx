import Image from "next/image";
import React from "react";
import gambarExperience from "/public/img/administration.jpg";
import PengalamanOrganisasi from "./PengalamanOrganisasi";
import freelance from "/public/img/freelance.jpg";
import desaingrafis from "/public/img/desaingrafis.jpg";
import Bootcamp from "./Bootcamp";
import hmtif from "/public/img/hmtif.jpg";
import kpps from "/public/img/kpps-pilkada.jpg";
import mapala from "/public/img/mapala.jpg";

const Experience = () => {
  const pengalamanKerja = [
    {
      id: 1,
      nama: "Admin Logistik",
      deskripsi: "Karimun Police Logistics Section office administration",
      tahun: "14 January 2021 - 13 January 2025",
      img: gambarExperience,
    },
    {
      id: 2,
      nama: "Fullstack Developer",
      deskripsi: "Build and manage end-to-end web applications, from front-end to back-end, with a focus on client needs.",
      tahun: "2022 - present",
      img: freelance,
    },
    {
      id: 3,
      nama: "Anggota KPPS 2",
      deskripsi: "KPPS Election 2024",
      tahun: "27 November 2024",
      img: kpps,
    },
  ];

  const pengalamanOrganisasi = [
    {
      id: 1,
      nama: "Karimun University Informatics Engineering Student Association",
      deskripsi: "Public Relations of HMTIF Karimun University",
      tahun: "2021 - 2022",
      img: hmtif,
    },
    {
      id: 2,
      nama: "Mapala Gunung Jantan, Karimun University",
      deskripsi: "Public Relations of MGJ Karimun University",
      tahun: "2021 - 2022",
      img: mapala
    },
  ];

  const pengalamanBootcamp = [
    {
      id: 1,
      nama: "Graphic Design Bootcamp",
      deskripsi: "Rumah BUMN Karimun held a Graphic Design Bootcamp",
      tahun: "8 June 2024",
      img: desaingrafis,
    },
  ];

  return (
    <>
      <div className="tools">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <h3 className="col-md-12">
              <div className="title-tools">
                <span className="garis-title-tools"></span>Work Experience
              </div>
              <div className="row ">
                <div className="col-md-12">
                  {pengalamanKerja.map((data, index) => (
                    <div className="card mb-3" key={index}>
                      {/* Tambahkan class flex-column-reverse untuk mobile */}
                      <div className="d-flex flex-column flex-md-row">
                        {/* Gambar */}
                        <div className="col-md-4">
                          <Image
                            src={data.img}
                            className="img-fluid rounded-start"
                            alt="gambar-experience"
                          />
                        </div>
                        {/* Teks */}
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Position: {data.nama}</h5>
                            <p className="card-text mt-3">
                              Description: {data.deskripsi}
                            </p>
                            <p className="card-text mt-3">
                              Work Years: {data.tahun}
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
      <Bootcamp bootcamp={pengalamanBootcamp} />
      <PengalamanOrganisasi organisasi={pengalamanOrganisasi} />
    </>
  );
};

export default Experience;
