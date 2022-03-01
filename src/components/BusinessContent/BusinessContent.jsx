import React from "react";
import "./styles.scss";

const BusinessContent = () => {
  return (
    <React.Fragment>
      <div className="business-content">
        <h1>Plan Mi Negocio</h1>
        <p>
          Tienes un nueo producto? Quieres actualizar información? Nos adornamos
          de temporada?
        </p>
        <span>
          1 Página Web, Hosting y Dominio.
          <small>(celular y computadora, 1 año)</small>
        </span>
        <span>
          6 Menús QR de temporada.
          <small>(Productos o servicios, celular y computadora,1 año)</small>
        </span>
        <span>
          6 Banner´s promocionales.
          <small>(Disponibles todo 1 año)</small>
        </span>
      </div>
    </React.Fragment>
  );
};

export default BusinessContent;
