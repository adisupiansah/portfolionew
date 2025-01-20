"use client";
import React, { useState } from "react";
import Image from "next/image";
import sibalog from "/public/img/sibalog.png";
import disposisi from "/public/img/disposisibaglog.png";
import notadinas from "/public/img/notadinas.png";
import cardultah from "/public/img/card-ultah.png";
import frontendEcommerce from "/public/img/e-commerce.png";
import frontendRatingfilm from "/public/img/webrating-film.png";
import webportfolio from "/public/img/webportfolio.png";
import ChartGW from "./Chart";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const Project = () => {
  const dataProject = [
    {
      id: 1,
      nama: "SIBALOG (SISTEM INFORMASI BAGIAN LOGISTIK)",
      deskripsi:
        "SIBALOG adalah sistem informasi yang digunakan untuk mengelola data-data yang ada di bagian logistik Polres Karimun.",
      commit: "5 December 2024",
      link: "https://sibalog.my.id",
      img: sibalog,
    },
    {
      id: 2,
      nama: "DISPOSISI BAGLOG",
      deskripsi:
        "Ini adalah aplikasi versi terlama sebelum ada aplikasi SIBALOG.",
      commit: "13 Juni 2023",
      link: "https://disposisibaglog.kesug.com/login.php",
      img: disposisi,
    },
    {
      id: 3,
      nama: "NOTADINAS BAGLOG",
      deskripsi:
        "Ini adalah aplikasi versi terlama sebelum ada aplikasi SIBALOG.",
      commit: "13 Juni 2023",
      link: "https://notadinaskeluarbaglog.great-site.net/",
      img: notadinas,
    },
    {
      id: 4,
      nama: "CARD ULTAH",
      deskripsi: "Card Ultah pesanan dari client.",
      commit: "8 Januari 2025",
      link: "https://muhammadmuammar.vercel.app/",
      img: cardultah,
    },
    {
      id: 5,
      nama: "FRONTEND WEB E-COOMERCE",
      deskripsi:
        "Aplikasi ini hanya Front-end tidak menyediakan back-end karna aplikasi ini sesuai dengan permintaan client.",
      commit: "25 Maret 2024",
      link: "https://ecomercce-api-store.vercel.app/",
      img: frontendEcommerce,
    },
    {
      id: 6,
      nama: "FRONTEND WEB RATING FILM",
      deskripsi: "Aplikasi rating film dengan menggunakan API dari TMDB.",
      commit: "19 April 2024",
      link: "https://atm-movies.vercel.app/",
      img: frontendRatingfilm,
    },
    {
      id: 7,
      nama: "PORTFOLIO",
      deskripsi: "Aplikasi Portfolio berbasis web",
      commit: "2 February 2024",
      link: "https://adisupiansah.my.id/",
      img: webportfolio,
    },
  ];

  const [showText, setShowText] = useState({});

  const toggleReadMore = (id) => {
    setShowText((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  return (
    <div className="project">
      <div className="container">
        <div className="row flex justify-center items-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="title text-center">
                  <h2>Past Project Experience</h2>
                  <span>Explore the projects I've worked on so far</span>
                </div>
                <div className="card p-2">
                  <ChartGW dataProject={dataProject} />
                </div>
              </div>
              {dataProject.map((data, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src={data.img}
                        alt="webportfolio"
                        className="card-img-top"
                      />
                      <h3 className="title-project mt-3">{data.nama}</h3>
                      <p>
                        {showText[data.id]
                          ? data.deskripsi
                          : data.deskripsi.split(" ").slice(0, 3).join(" ") +
                            "..."}{" "}
                        <span className='text-blue-500 cursor-pointer' onClick={() => toggleReadMore(data.id)}>
                          {showText[data.id] ? "Show Less" : "read more"}
                        </span>
                      </p>
                      <p>{data.commit}</p>
                      <Link href={data.link} target="_blank" className="flex">
                        view project <LuExternalLink className="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
