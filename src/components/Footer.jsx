import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. 2025 Improving IDS Using AI to Enhanced
          the vehicle Saftey Research Project University of Sri Jayewardenepura
          | Department of Information & Comminication Technology
        </p>
      </div>
    </Section>
  );
};

export default Footer;
