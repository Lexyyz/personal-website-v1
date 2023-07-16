import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/backProfileImage.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footerText">
        <img src={Picture} alt="" />
        <span>Come Join Us!</span>
      </div>
      <div className="footerLink">
        <a target="_blank" href="aldihayato8@gmail.com">Email Me</a>
        <a target="_blank" href="http://wa.me/6285759940338">WhatsApp Me</a>
        <a target="_blank" href="https://profile-v2-dun.vercel.app/">More Contact</a>        
      </div>
      <div className="footerSosmed">
        <a target="_blank" href="https://instagram.com/aldialpiansyah.44">Instagram</a>
        <a target="_blank" href="https://www.tiktok.com/@_lexyy04/">Tik Tok</a>
        <a target="_blank" href="https://sck.io/u/@Aldsyh/hjbyxE-z">Snack Video</a>
        <a target="_blank" href="https://github.com/Lexyyz/">GitHub</a>
      </div>
    </section>
  );
};

export default Footer;
