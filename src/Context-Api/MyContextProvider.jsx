import React, { useState } from 'react';
import MyContext from './MyContext';
import Project1Image from '../images/projects/Project1.png'
import Project2Image from '../images/projects/Project2.png'

const MyContextProvider = ({ children }) => {
    const tempEmail = "harshvardhanpipariya65@gmail.com";
    const tempPassword = "12345";
    const [UserDetails,setUserDetails] = useState({
        name: "Harshvardhan Pipariya",
        about: ` I’m a software developer and here is my portfolio website. Here you’ll
          learn about my journey as a software developer.`,
        myTechStack: `Hi Everyone My name is Harshvardhan Pipariya I am a Full Stack Web Developer I
                    have been working on this field for last 1 year and Currently I am working with a
                    EazyByte in India as a remote intern and a full Time Freelancer. Currently I am
                    Learning on NextJs.`
    });

    const [totalProject,setTotalProject] = useState({
      totalCountOfProject: 2, // Set the total count of projects
      projects: [
        {
          id: "project1",
          number: "01",
          skills: [
            "HTML",
            "CSS",
            "Javascript",
            "Express",
            "NextJsCircle",
            "Tailwind",
            "NodeJs",
            "MongoDB",
            "Redux",
            "Vercel",
          ],
          heading: "Tint & Orange",
          subHeading:
            "It is a car modification company that provides sheets to protect your car from scratches.",
          gitHubLink: "https://portfoliowebsite11-ibmj.vercel.app/", // Provide actual GitHub link here
          liveLink: "https://portfoliowebsite11-ibmj.vercel.app/", // Provide actual live project link here
          backgroundImage:Project1Image
        }, {
          id: "project2",
          number: "02",
          skills: [
            "HTML",
            "CSS",
            "Javascript",
            "Express",
            "NextJsCircle",
            "Tailwind",
            "NodeJs",
            "MongoDB",
            "Redux",
            "Vercel",
          ],
          heading: "Tint & Orange",
          subHeading:
            "It is a car modification company that provides sheets to protect your car from scratches.",
          gitHubLink: "https://portfoliowebsite11-ibmj.vercel.app/", // Provide actual GitHub link here
          liveLink: "https://portfoliowebsite11-ibmj.vercel.app/", // Provide actual live project link here
          backgroundImage:Project2Image
        },
        
      ],
    });


    const [contactMe,SetContactme] = useState([{
      name:"",
      email:"",
      subject:"",
      message:"",
    }])
    
    
      





    return (
        <MyContext.Provider value={{contactMe,SetContactme, tempEmail, tempPassword,UserDetails,setUserDetails,totalProject,setTotalProject }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;
