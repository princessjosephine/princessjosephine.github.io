import React from 'react'
import AExpCard from './AExpCard.jsx'
import AExpImage from './AExpImage.jsx'
import TExpCard from './TExpCard.jsx'
import PLCard from './PLCard.jsx'
import NTCard from './NTCard.jsx'
import FFCard from './FFCard.jsx'
import SkillCard from './SkillCard.jsx'
import './SEIndex.css'
import generalBackground from '../assets/generalBackground.jpeg'
function SEPage() {
    const backgroundStyle = {
        backgroundImage: `url(${generalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '250vh'
    };


    return (
        <>
            <div style={backgroundStyle}>
                <h2 className="SE-title">Skills and Experience</h2>
                <AExpCard/>
                <AExpImage/>
                <hr></hr>
                <TExpCard/>
                <PLCard/>
                <hr></hr>
                <NTCard/>
                <FFCard/>
                <SkillCard/>
            </div>
        </>
    );

}
export default SEPage