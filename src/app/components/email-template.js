const React = require('react');

const generateEmailHTML = (arrayData) => (
  React.createElement(
    'div',
    null,
    arrayData.map((objectData, index) =>
      React.createElement(
        'div',
        { key: objectData.id},
        React.createElement(
          'h1',
          { style: { color: 'black' } },
          `Correo numero ${index+1}: Hola Eudy, quiero contactar contigo para una propuesta. Mi nombre es ${objectData.nombre} y mi correo es ${objectData.correo}`
        ),
        React.createElement(
          'p',
          null,
          `Mensaje: ${objectData.mensaje}`
        ),
        React.createElement(
          'a',
          {
            href: `mailto:${objectData.correo}?subject=Propuesta de servicios - [Eudy Familia Pérez]`,
            style: {
              display: 'inline-block',
              backgroundColor: 'white',
              color: 'green',
              border: '3px solid green',
              padding: '10px 20px',
              textDecoration: 'none',
            }
          },
          React.createElement(
            'h1',
            { style: { margin: 0 } },
            'Responder con un correo'
          )
        )
      )
    )
  )
);

module.exports = { generateEmailHTML };
