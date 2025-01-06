import aExpImage from '../assets/volunteerPicture.jpg';
import './SEIndex.css';

function AExpImage() {
    return (
        <div className="volPicCard">
            <img className="volPic" src={aExpImage} alt="volunteerPic"/>
        </div>
    );
}

export default AExpImage;

