import React from 'react'
import EducationCard from './EducationCard.jsx'
import ImageGallery from './ImageGallery.jsx'
import DifferentCard from './DifferentCard.jsx'
import QuestionMarkCard from './QuestionMarkCard.jsx'
import FunFactCard from './FunFactCard.jsx'
import GetThereCard from './GetThereCard.jsx'
import SeeMyselfCard from './SeeMyselfCard.jsx'
import './AboutIndex.css'
import generalBackground from '../assets/generalBackground.jpeg'
function AboutPage() {
    const backgroundStyle = {
        backgroundImage: `url(${generalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '255vh'
    };


    return (
        <>
            <div style={backgroundStyle}>
                <h2 className="About-title">About</h2>
                <EducationCard />
                <ImageGallery />
                <hr></hr>
                <DifferentCard />
                <QuestionMarkCard />
                <FunFactCard />
                <hr></hr>
                <GetThereCard />
                <SeeMyselfCard />
            </div>
        </>
    );

}
export default AboutPage