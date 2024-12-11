import React, { useContext } from 'react'
import HTML from './images/stack/HTML.png';
import CSS from "./images/stack/CSS.png";
import Javascript from "./images/stack/Javascript.svg";
import Reacts from "./images/stack/React.png";
import NodeJs from "./images/stack/NodeJs.svg";
import Next from "./images/stack/Next.svg";
import Redux from "./images/stack/Redux.svg";
import Tailwind from "./images/stack/Tailwind.png"
import Bootstrap from "./images/stack/Bootstrap.svg";
import MaterialUI from "./images/stack/MaterialUI.svg";
import Express from "./images/stack/Express.png";
import Git from "./images/stack/Git.svg";
import Github from "./images/stack/Github.svg";
import Graphql from "./images/stack/Graphql.svg";
import MongoDB from "./images/stack/MongoDB.svg";
import Vercel from "./images/stack/Vercel.svg";
import ChartJs from "./images/stack/ChartJs.svg"
import Bash from "./images/stack/Bash.svg";
import Docker from "./images/stack/Docker.svg";
import K8s from "./images/stack/K8s.svg";
import MyContext from './Context-Api/MyContext';

const SkillsSection = () => {

    const {UserDetails} = useContext(MyContext);
    
    return (<div  className="container skills-container " id="skill">
        <div className="skill-fade-text">Skills</div>

        <div className="skill-container-left">
            <h2 className="skill-heading">
                <span className="caps">M</span>e and
                <br />
                MyTech Stack
            </h2>

            <div className="skill-subHeading">
                <p>
                {UserDetails.myTechStack}
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                    doloremque aspernatur, maiores voluptatum minus laudantium?
                    Perspiciatis accusamus minima porro dolores necessitatibus, magni
                    dolorem et qui veniam nulla sequi molestiae maxime.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem
                    quos ullam veritatis voluptates tenetur qui ipsa nulla culpa itaque?
                </p>
            </div>
        </div>

        <div className="skill-container-right">
            <img src="./images/userAsset/blob vector.png" className="blob-style" alt="" />

            <img src={HTML} alt="" className="skills-logo" />
            <img src={CSS} alt="" className="skills-logo" />
            <img src={Javascript} alt="" className="skills-logo" />
            <img src={Reacts} alt="" className="skills-logo" />
            <img src={NodeJs} alt="" className="skills-logo" />
            <img src={Next} alt="" className="skills-logo" />
            <img src={Redux} alt="" className="skills-logo" />
            <img src={Tailwind} alt="" className="skills-logo" />
            <img src={Bootstrap} alt="" className="skills-logo" />
            <img src={MaterialUI} alt="" className="skills-logo" />
            <img src={Express} alt="" className="skills-logo" />
            <img src={Git} alt="" className="skills-logo" />
            <img src={Github} alt="" className="skills-logo" />
            <img src={Graphql} alt="" className="skills-logo" />
            <img src={MongoDB} alt="" className="skills-logo" />
            <img src={Vercel} alt="" className="skills-logo" />
            <img src={ChartJs} alt="" className="skills-logo" />
            <img src={Bash} alt="" className="skills-logo" />
            <img src={Docker} alt="" className="skills-logo" />
            <img src={K8s} alt="" className="skills-logo" />
        </div>



    </div>
    )
}

export default SkillsSection