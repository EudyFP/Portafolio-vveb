import React from "react";

export function generateEmailHTML(arrayData) {
  return (
    <div>
      {arrayData.map((objectData, index) => (
        <div key={objectData.id ?? index}>
          <h1 style={{ color: "black" }}>
            Correo número {index + 1}: Hola Eudy, quiero contactar contigo para una
            propuesta. Mi nombre es {objectData.nombre} y mi correo es{" "}
            {objectData.correo}
          </h1>

          <p>Mensaje: {objectData.mensaje}</p>

          <a
            href={`mailto:${objectData.correo}?subject=Propuesta de servicios - [Eudy Familia Pérez]`}
            style={{
              display: "inline-block",
              backgroundColor: "white",
              color: "green",
              border: "3px solid green",
              padding: "10px 20px",
              textDecoration: "none",
            }}
          >
            <h1 style={{ margin: 0 }}>Responder con un correo</h1>
          </a>
        </div>
      ))}
    </div>
  );
}
