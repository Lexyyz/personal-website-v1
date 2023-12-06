import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutTypo">
        <i className="aboutTypoText">about me</i>
        <i className="aboutTypoText">about me</i>
        <i className="aboutTypoText">about me</i>
      </div>
      <div className="aboutContent">
        <h1 className="aboutInfo">
        Apabila kamu mampu memimpikannya, maka kamu juga bisa melakukannya.
        </h1>
        <a className="aboutButton" href="#">
          Read More About Me <i class="uil uil-arrow-up-right"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
