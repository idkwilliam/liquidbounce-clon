import React from "react";
import "../styles/stylesheets.css"

function Qualities(props) {
    return(
        <div className="main-container">
            <div className="qualities-image-container">
            <img className="qualities-image" src={require(`../images/${props.image}.png`)} alt={`${props.alt}-image`} />
            </div>
            <div className="qualities-texts-container">
            <h4 className="qualities-title">{props.title}</h4>
            <p className="qualities-text">{props.text}</p>
            </div>
        </div>
    );
}

export default Qualities;