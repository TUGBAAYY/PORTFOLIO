import React from 'react';
import "./about.css"
import Image from "../../assets/logo.svg.jpeg"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Hello, I'm Tuğba Ay! <br />

              I'm a frontend developer, specializing in creating web applications with React.js. My focus is on crafting user-friendly and captivating web experiences.

              Feel free to get in touch for more information! </p>
            <a href="" className="btn">Dowland Cv</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">React.js</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development">

                </span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Css</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design">

                </span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Html</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography">

                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About