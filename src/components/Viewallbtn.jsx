import "../styles/stylesheets.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Viewallbtn(props) {
    return(
        <div className="va-main-container">
            <div className="va-sub-container">
                <div className="va-container">
                    <a className="va-title" href="#">{props.title}</a>
                    <FontAwesomeIcon className="va-icon" icon={faChevronRight} size="2xs" />
                </div>
            </div>
        </div>
    );
}

export default Viewallbtn;