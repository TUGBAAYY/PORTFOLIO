import React from 'react';
import "./home.css";
import Me from "../../assets/logo.svg.jpeg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Tuğba Ay</h1>
        <span className="home__education">
          <span className="animated-text">I AM A FRONT-END DEVELOPER</span>
        </span>
        <HeaderSocials />

        <a href="#contact" className="btn">Contact Me</a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
