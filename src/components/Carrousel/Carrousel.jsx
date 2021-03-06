import React, { useState, useEffect } from "react";
import "./styles.scss";
import MainButton from "../MainButton/MainButton";
import firstSlide from "../../assets/img/slide1.webp";
import secondSlide from "../../assets/img/slide2.webp";

const Carrousel = () => {
  const [slideActive, setSlideActive] = useState(0);
  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      let slide = slideActive === 1 ? 0 : 1;
      setSlideActive(slide);
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [slideActive]);

  return (
    <React.Fragment>
      <section className="carrousel">
        <input
          id="slide-0"
          name="carrousel"
          type="radio"
          checked={slideActive == 0}
          onChange={() => {}}
        />
        <div
          className="slide"
          style={{ display: `${slideActive == 0 ? "block" : "table-column"}` }}
        >
          <div className="slide-content">
            <img src={firstSlide} alt="slide1" />
            <div className="slide-display">
              <h1>Plan Mi Negocio</h1>
              <div className="slide-description">
                <span>
                  1 Página Web, Hosting y Dominio.
                  <small>(celular y computadora, 1 año)</small>
                </span>
                <span>
                  6 Menús QR de temporada.
                  <small>
                    (Productos o servicios, celular y computadora,1 año)
                  </small>
                </span>
                <span>
                  6 Banner´s promocionales.
                  <small>(Disponibles todo 1 año)</small>
                </span>
                <span className="a-right">$4,999.00 MXN*</span>
              </div>
            </div>
          </div>
        </div>
        <input
          id="slide-1"
          name="carrousel"
          type="radio"
          checked={slideActive == 1}
          onChange={() => {}}
        />
        <div
          className="slide"
          style={{ display: `${slideActive == 1 ? "block" : "table-column"}` }}
        >
          <div className="slide-content">
            <img src={secondSlide} alt="slide2" />
            <div className="slide-display">
              <h1 className="r alt">Plan Mi Negocio</h1>
              <div className="slide-description">
                <span>
                  Diseño y desarrollo de sistemas
                  <small className="fw-bold">
                    Administración y gestión de Negocios/Proyectos.
                  </small>
                </span>
                <span className="to-bottom">
                  Desarrollo a la medida de tu negocio
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <MainButton type={"button"} onClick={() => {}} text={"Contratar"} />
        </div>
        <div className="controls">
          <span className={`dot ${slideActive == 0 ? "active" : ""}`}>
            <label htmlFor="slide-0" onClick={() => setSlideActive(0)}></label>
          </span>
          <span className={`dot ${slideActive == 1 ? "active" : ""}`}>
            <label htmlFor="slide-1" onClick={() => setSlideActive(1)}></label>
          </span>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Carrousel;
