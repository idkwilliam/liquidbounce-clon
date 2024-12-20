import "../styles/stylesheets.css"

function HeaderNavbar(props) {
    return(
        <ul className="hri-ul">
            <li className="hri-li">
                <a className="header-row-items" href="#">{props.text}</a>
            </li>
        </ul>
    );
}

export default HeaderNavbar;