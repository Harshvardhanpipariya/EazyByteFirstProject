import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-faded-text">Harshvardhan Pipariya</div>

                    <div className="link-wrapper">
                        <div>
                            <a href="#projects">Projects</a>
                        </div>
                        <div>
                            <a href="#skill">Skills</a>
                        </div>
                        <div>
                            <a href="#contactme">Contact Me</a>
                        </div>

                        <div>
                            <Link to="/admin-access">Admin Access</Link>
                        </div>
                    </div>

                    <div className="icon-wrapper">
                    <a href="https://www.linkedin.com/in/harshvardhanpipariya/"> <i className="fa-brands fa-linkedin icon"></i></a>
                    <a href="https://github.com/Harshvardhanpipariya"> <i className="fa-brands fa-github icon"></i></a>
                    <a href="https://x.com/Harshvardhp"> <i className="fa-brands fa-twitter icon"></i></a>
                    <a href="#instagram"> <i className="fa-brands fa-instagram icon"></i></a>
                    <a href="mailto:harshvardhanpipariya65@gmail.com"> <i className="fa-regular fa-envelope icon"></i></a>
                        
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;