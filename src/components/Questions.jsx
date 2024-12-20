import React from "react"
import "../styles/stylesheets.css"

function Questions(props) {
    return(
        <div className="qs-container">
            <div className="qs-maintexts">
                <div className="qs-title">
                    <h4>{props.title}</h4>
                </div>
                <div className="qs-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Questions;