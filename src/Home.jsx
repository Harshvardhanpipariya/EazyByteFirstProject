import React, { useContext, useEffect } from 'react';
import Typed from "typed.js";
import Dots from './images/userAsset/dots.png';
import Cube from "./images/userAsset/cube.png";
import Circle from "./images/userAsset/circle.png";
import Zigzags from "./images/userAsset/zigzags.png";
import Plus from "./images/userAsset/plus.png";
import UserImage from "./images/userAsset/UserImage.png";
import Navbar from './Navbar';
import Projectsection from "./Projectsection";
import SkillsSection from "./SkillsSection";
import ContantMe from "./ContantMe";
import Footer from "./Footer";
import MyContext from './Context-Api/MyContext';


export const Home = () => {
  

    const {UserDetails} = useContext(MyContext);
console.log(UserDetails);

    useEffect(() => {
        // Initialize Typed.js on the ".role" element
        const typed = new Typed(".role", {
          strings: [
            "Full Stack Developer",
            "Web Developer",
            "UI-UX Designer",
            "Backend Developer",
            "Coder",
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1000,
        });
    
        // Clean up the Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }, []); // The empty dependency array ensures this runs only once




  return (

    <>
    <div className="container">
    <Navbar />
    <div className="hero-section">
      <div className="faded-text">{UserDetails.name}</div>

      <div className="hero-section-left">
      <div className="hero-section-heading">Hi! {UserDetails.name}</div>

        <div className="hero-section-heading hero-section-sub-heading">
          I am a <span className="role"></span>
        </div>

        <div className="hero-section-description">
         {UserDetails.about}
        </div>

        <div className="btn-pink" id="btn">Hire me</div>
      </div>

      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src={Dots} alt="" />
        </div>
        <div className="absolute icons icon-cube">
          <img src={Cube} alt="" />
        </div>
        <div className="absolute icons icon-circle">
          <img src={Circle} alt="" />
        </div>
        <div className="absolute icons icon-zigzag">
          <img src={Zigzags} alt="" />
        </div>
        <div className="absolute icons icon-plus">
          <img src={Plus} alt="" />
        </div>
        <div className="user-image">
          <img src={UserImage} alt="" />
        </div>
      </div>
    </div>
  </div>
  <Projectsection />
  <SkillsSection />
  <ContantMe />
  <Footer />


 </>
  )
}
