import React from 'react'
import facebookIcon from '../assets/facebookIcon.png'
import githubIcon from '../assets/githubIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import constantsBackground from '../assets/constantsBackground.jpeg'
import './ConstantsIndex.css'
function Footer() {
    const backgroundStyle = {
        backgroundImage: `url(${constantsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={backgroundStyle}>
            <footer>
                <p className="Footer-text">
                    <span>Copyright &copy; {new Date().getFullYear()} Josephine Udounwa Projects</span>
                    <span className="Footer-icons">
                        <a href="https://www.facebook.com/profile.php?id=61555929240647" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://github.com/princessjosephine" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/princess-josephine-udounwa-17b034332/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                    </span>
                </p>
            </footer>
        </div>
    );
}

export default Footer