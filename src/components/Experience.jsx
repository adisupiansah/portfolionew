import Image from "next/image";
import React from "react";
import gambarExperience from "/public/img/administration.jpg";
import PengalamanOrganisasi from "./PengalamanOrganisasi";
import freelance from "/public/img/freelance.jpg";
import desaingrafis from "/public/img/desaingrafis.jpg"
import Bootcamp from "./Bootcamp";
import hmtif from '/public/img/hmtif.jpg'
import kpps from '/public/img/kpps-pilkada.jpg'


const Experience = () => {
  const pengalamanKerja = [
    {
      id: 1,
      nama: "Office administration",
      deskripsi: "Administrasi Bagian Logistik Polres Karimun",
      tahun: "14 Januari 2021 - 13 Januari 2025",
      img: gambarExperience,
    },
    {
      id: 2,
      nama: "Fullstack Developer",
      deskripsi: "Freelance Fullstack Developer",
      tahun: "2022 - sekarang",
      img: freelance,
    },
    {
      id: 3,
      nama: "Anggota KPPS 2",
      deskripsi: "KPPS Pilkada 2024",
      tahun: "27 November 2024",
      img:kpps,
    }
  ];

  const pengalamanOrganisasi = [
    {
      id: 1,
      nama: "Himpunan Mahasiswa Teknik Informatika Unversitas Karimun",
      deskripsi: "Sekretaris HMTIF Universitas Karimun",
      tahun: "2021 - 2022",
      img: hmtif
    },
    {
      id: 2,
      nama: "Mapala Gunung Jantan Universitas Karimun",
      deskripsi: "Humas MGJ Universitas Karimun",
      tahun: "2021 - 2022",
    }
  ];

  const pengalamanBootcamp = [
    {
      id: 1,
      nama: "BOOTCAMP DESAIN GRAFIS",
      deskripsi: "Rumah BUMN Karimun mengadakan BOOTCAMP DESAIN GRAFIS",
      tahun: "8 Juni 2024",
      img: desaingrafis,
    },
  ];

  return (
    <>
      <div className="tools">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <h3 className="col-md-8">
              <div className="title-tools">
                <span className="garis-title-tools"></span>Work Experience
              </div>
              <div className="row ">
                <div className="col-md-12">
                  {pengalamanKerja.map((data, index) => (
                    <div className="card mb-3" key={index}>
                      <div className="d-flex">
                        <div className="col-md-4">
                          <Image
                            src={data.img}
                            className="img-fluid rounded-start"
                            alt="gambar-experience"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Jabatan: {data.nama}</h5>
                            <p className="card-text mt-3">
                              Deskripsi: {data.deskripsi}
                            </p>
                            <p className="card-text mt-3">
                              Tahun kerja: {data.tahun}
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
      <Bootcamp bootcamp={pengalamanBootcamp}/>
      <PengalamanOrganisasi organisasi={pengalamanOrganisasi} />
    </>
  );
};

export default Experience;
