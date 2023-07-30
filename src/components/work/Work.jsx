import React from "react";
import "./work.css";
import Picture from "../../assets/Example.jpg";

const Work = () => {
  return (
    <section id="work">
      <div className="workDesign">
        <div className="workTypo">
          <span><i>work</i></span>
          <span><i>work</i></span>
          <span><i>work</i></span>
        </div>
        <span className="workOpening"><i>Featured Projects  🎟️</i></span>
      </div>
      <div className="workContainerMain">
        <div className="workMain">
          <img className="workImage" src={Picture} alt="" />
          <div className="workText">
            <span className="workNumber"> </span>
            <div className="workTitle">
              <span></span>
              <span><i>Tagline produk 🛒 </i></span>
            </div>
          </div>
        </div>
        <div className="workLink">
          <a className="workLinked" href="#">
            <i class="uil uil-arrow-up-left"></i>
            <span>Online Preview 🛒 </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
