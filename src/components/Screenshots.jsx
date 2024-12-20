import React, { useState } from "react";
import "../styles/stylesheets.css";

function Screenshots(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openImg = () => {
    setIsOpen(true);
  };

  const closeImg = () => {
    setIsOpen(false);
  };

  return (
    <div className="ss-main-container">
      <div className="ss-subcontainer">
        <img
          className="ss-image"
          src={require(`../images/screenshots/${props.ssimage}.png`)}
          alt={props.ssalt}
          onClick={openImg}
        />
        <div className="ss-tt">
          <h4 className="ss-title">{props.sstitle}</h4>
          <p className="ss-text">{props.sstext}</p>
        </div>
      </div>

      {isOpen && (
        <div
          className={`modal ${isOpen ? "open" : ""}`} // Aplica la clase 'open' cuando el modal está abierto
          onClick={closeImg} // Cierra el modal cuando se hace clic fuera de la imagen
        >
          <div className="modal-content">
            <img
              className="ss-expanded-image"
              src={require(`../images/screenshots/${props.ssimage}.png`)}
              alt={props.ssalt}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Screenshots;
