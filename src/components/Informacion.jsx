import Teoria from "./Teoria";

const Informacion = () => {

  // aqui agrego la mayor parte de logica

  return (
    // algo de logica
    <section>
      {/* aqui agrego comentario del maquetado*/}
      <h2 class=" text-center">Introducion a react</h2>
      <p class=" text-center">React es una biblioteca de JavaScript
        desarrollada por Facebook para construir interfaces
        de usuario. Se destaca por su enfoque en la 
        creacion de aplicaciones web de una sola <strong>pagina SPA</strong>
        y su capacidad para manejar la interfaz de manera 
        eficiente mediante el uso de un <span className="parrafoResaltado">DOOM virtual</span>. React 
        permite a los desarrolladores construir interfaces
        dinamicas y reactivas de forma modular, lo que facilita el desarrollo y el
        mantenimientoo de aplicaiones a gran escala.
      </p>
      <Teoria></Teoria>
    </section>
  );
};

export default Informacion;