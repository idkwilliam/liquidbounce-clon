import "../styles/stylesheets.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return(
        <div className="footer-main-container">
            <div className="footer-logo-wrapper">
                <a href="#"><img className="fo-image" src={require(`../images/ccbluex-logo.png`)} alt="logofooter" /></a>
                <p className="fo-slogan">Made By CCBlueX</p>
            </div>
            <div className="right-footer">
                <ul>
                    <li>
                        <a href="#">support@liquidbounce.net</a>
                        <p className="fo-rf-text">© <a href="#">CCBlueX</a> 2015-2024</p>
                    </li>
                </ul>
                <span className="fo-rf-span" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <i className="fo-rf-icon"><FontAwesomeIcon icon={faAngleUp} /></i>
                </span>
            </div>
        </div>
    );
}

export default Footer;