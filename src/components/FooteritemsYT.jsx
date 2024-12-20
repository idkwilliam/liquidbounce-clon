import "../styles/stylesheets.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function FooteritemsYT() {
    return(
        <div className="fiyt-container">
            <h5 className="fiyt-title">Subscribe</h5>
            <ul>
                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faGithubAlt} /></a>
            </ul>
        </div>
    );
}

export default FooteritemsYT;