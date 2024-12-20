import "../styles/stylesheets.css"

function Subtitles(props) {
    return(
       <div className="subtitles-container">
        <h3 className="subtitle-title">{props.title}</h3>
        <div className="subtitle-text-container">
        <p className="subtitle-text">{props.text}</p>
        </div>
       </div> 
    );
}

export default Subtitles;