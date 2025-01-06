import aboutMePic from '../assets/aboutMePic.jpg'
import gryphonIcon from '../assets/gryphonIcon.jpeg'
import uogIcon from '../assets/uogIcon.jpeg'
import louisvilleIcon from '../assets/louisvilleIcon.jpeg'
import gradIcon from '../assets/gradIcon.jpg'
import orientationIcon from '../assets/orientationIcon.jpg'
import './AboutIndex.css'

function ImageGallery() {
    return (
        <div className = "image-grid">
            <div className="MePic">
                <a>
                    <img src={aboutMePic} alt="aboutMePic"></img>
                </a>
                <div className="desc"> Me<br></br>(June 2024) </div>
            </div>

            <div className="GryphonPic">
                <a>
                    <img src={gryphonIcon} alt="gryphonIcon"></img>
                </a>
                <div className="desc">Gryph! The University of Guleph Mascot </div>
            </div>

            <div className= "UogPic">
                <a>
                    <img src={uogIcon} alt="uogIcon"></img>
                </a>
                <div className="desc">The famous Johnson Hall at the University !</div>
            </div>

            <div className="LouisPic">
                <a>
                    <img src={louisvilleIcon} alt="louisvilleIcon"></img>
                </a>
                <div className="desc">The Louisville Secondary Schools Crest</div>
            </div>

            <div className="GradPic">
                <a>
                    <img src={gradIcon} alt="gradIcon"></img>
                </a>
                <div className="desc"><br></br>Me at graduation (July 2024)</div>
            </div>

            <div className="OrientPic">
                <a>
                    <img src={orientationIcon} alt="orientationIcon"></img>
                </a>
                <div className="desc">The University of Guelph front with the </div>
            </div>
        </div>
    )
}

export default ImageGallery