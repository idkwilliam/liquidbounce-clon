import "../styles/stylesheets.css";

function Footeritems(props) {
    return(
            <div className="fi-container">
                <h5 className="fi-title">{props.title}</h5>
                <li>
                    <a href="#">{props.ref1}</a>
                    <a href="#">{props.ref2}</a>
                    <a href="#">{props.ref3}</a>
                    <a href="#">{props.ref4}</a>
                    <a href="#">{props.ref5}</a>
                </li>
            </div>
    );
}

export default Footeritems;