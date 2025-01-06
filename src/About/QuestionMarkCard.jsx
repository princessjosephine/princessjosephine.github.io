import questionIcon from '../assets/questionIcon.jpeg';
import './AboutIndex.css';

function QuestionMarkCard() {
    return (
        <div className="QuestionMarkCard">
            
            <img className="QuestionPic" src={questionIcon} alt="questionIcon" />
        </div>
    );
}

export default QuestionMarkCard;