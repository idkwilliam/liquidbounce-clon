import "../styles/stylesheets.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function HeaderNavbarList(props) {
    return(
        <ul className="hrim-ul">
            <li className="hrim-li"><a className="header-row-items-menulist" href="#">{props.text}<i className="hrim-icon"><FontAwesomeIcon icon={faAngleDown} /></i></a>
                <ul className="hrim-menulist">
                    <li><a href="#">{props.ref1}</a><i><FontAwesomeIcon icon={faPlus} /></i></li>
                    <li><a href="#">{props.ref2}</a><i><FontAwesomeIcon icon={faPlus} /></i></li>
                    <li><a href="#">{props.ref3}</a><i><FontAwesomeIcon icon={faPlus} /></i></li>
                    <li><a href="#">{props.ref4}</a><i><FontAwesomeIcon icon={faPlus} /></i></li>
                    <li><a href="#">{props.ref5}</a><i><FontAwesomeIcon icon={faPlus} /></i></li>
                </ul>
            </li>
        </ul>
    );
}

export default HeaderNavbarList;