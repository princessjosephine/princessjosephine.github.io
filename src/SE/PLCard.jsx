import cIcon from '../assets/CIcon.png';
import cssIcon from '../assets/CSSIcon.png';
import htmlIcon from '../assets/htmlIcon.png';
import javaIcon from '../assets/javaIcon.png';
import jsIcon from '../assets/jsIcon.png';
import pythonIcon from '../assets/pythonIcon.png';
import './SEIndex.css';


function PLCard() {
    return (
        <div className="PLCardContainer">
                <img src={cIcon} alt="cIcon" className="PLIcon" />
                <img src={cssIcon} alt="cssIcon" className="PLIcon" />
                <img src={htmlIcon} alt="htmlIcon" className="PLIcon" />
                <img src={javaIcon} alt="javaIcon" className="PLIcon" />
                <img src={jsIcon} alt="jsIcon" className="PLIcon" />
                <img src={pythonIcon} alt="pythonIcon" className="PLIcon" />
        </div>
    );
}

export default PLCard;