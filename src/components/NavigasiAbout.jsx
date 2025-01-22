"use client";
import React, { useState } from "react";
import AboutSkils from "./AboutSkils";
import Experience from "./Experience";
import SocialMedia from "./SocialMedia";

const NavigasiAbout = () => {
  // State untuk menyimpan tab aktif
  const [activeTab, setActiveTab] = useState("techStack");

  return (
    <div className="about-navigasi">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="navigasi col-md-6">
              <div className="navigasi-item d-flex justify-content-center align-items-center">
                {/* Tab untuk Tech Stack */}
                <button
                  className={`navabout-link mx-auto ${
                    activeTab === "techStack" ? "active-navigasiabout" : ""
                  }`}
                  onClick={() => setActiveTab("techStack")}
                >
                  Tech stack
                </button>
                {/* Tab untuk Experience */}
                <button
                  className={`navabout-link mx-auto ${
                    activeTab === "experience" ? "active-navigasiabout" : ""
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>

                <button
                  className={`navabout-link mx-auto ${
                    activeTab === "socialMedia" ? "active-navigasiabout" : ""
                  }`}
                  onClick={() => setActiveTab("socialMedia")}
                >
                  Social Media
                </button>
              </div>
            </div>

            {/* Konten berdasarkan tab aktif */}
            <div className="content">
              {activeTab === "techStack" && (
                <div>
                  <AboutSkils />
                </div>
              )}
              {activeTab === "experience" && (
                <div>
                  <Experience />
                </div>
              )}
              {activeTab === "socialMedia" && (
                <div>
                  <SocialMedia/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigasiAbout;
