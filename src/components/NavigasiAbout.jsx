"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const NavigasiAbout = () => {
  const pathname = usePathname();
  const active = (url) => {
    return pathname === url ? "active-navigasiabout" : "";
  };
  return (
    <div className="about-navigasi">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="navigasi col-md-5">
              <div className="navigasi-item d-flex justify-content-between align-items-center">
                <Link
                  href="/about"
                  className={`navabout-link ${active("/about")}`}
                >
                  Tech stack
                </Link>
                <Link
                  href="/about/tools"
                  className={`navabout-link ${active("/about/tools")}`}
                >
                  Tools
                </Link>
                <Link
                  href="/about/experience"
                  className={`navabout-link ${active("/about/experience")}`}
                >
                  Experience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigasiAbout;
