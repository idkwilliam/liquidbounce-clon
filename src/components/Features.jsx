import React, { useState, useEffect, useRef } from "react";
import "../styles/stylesheets.css";

function Features(props) {
  const [count, setCount] = useState(0); // Estado para el contador
  const [startCounting, setStartCounting] = useState(false); // Controla si el contador debe comenzar
  const ref = useRef(null); // Referencia al elemento

  const endValue = props.number; // Valor final del contador
  const duration = 2000; // Duración total en milisegundos

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // Comienza el contador cuando es visible
          observer.disconnect(); // Detén la observación
        }
      },
      { threshold: 0.5 } // 50% del elemento debe estar visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!startCounting) return;

    const increment = Math.ceil(endValue / (duration / 10));

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment >= endValue) {
          clearInterval(interval);
          return endValue;
        }
        return prevCount + increment;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [startCounting, endValue, duration]);

  return (
    <div className="fs-main-container" ref={ref}>
      <img src={require(`../images/Features/${props.image}.png`)} alt={`${props.alt}-image`} className="fs-image" />
      <div className="fs-main-text-container">
        <div className="numbercounter-container">
            <span className="fs-title">{count.toLocaleString()}</span>
            <p className="fs-titleplus">+</p>
        </div>
        <div className="fs-text-container">
          <p className="fs-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
