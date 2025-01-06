import profilePic from '../assets/profile.png'
function PhotoCard() {
    return (
        <div className="PhotoCardContainer">
            <img className="profilePic-Image" src={profilePic} alt="profile picture"></img>
            <div className="PhotoCard">
                <h2 className="profilePic-Title">Hello there!</h2>
                <p className="profilePic-Text">My name is Princess Josephine Udounwa and I am , a passionate developer and lifelong learner. I have a great deal of enthusiasm for programming, and I am heavily interested in both front-end and back-end development.
                </p>
            </div>
        </div>
    );
}

export default PhotoCard