import React from 'react'
import PhotoCard from './PhotoCard.jsx';
import IntroCard from './IntroCard.jsx';
import generalBackground from '../assets/generalBackground.jpeg'
import './Homeindex.css'

function HomePage(){
  const backgroundStyle = {
    backgroundImage: `url(${generalBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };


  return (
    <>
    <div style = {backgroundStyle}>
    <h2 className = "Home-title">Home</h2>
    <PhotoCard/>
    <IntroCard/>
    </div>
    </>
  );
  
}

export default HomePage
