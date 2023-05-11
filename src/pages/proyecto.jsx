import React from "react";
import p1 from "../img/proyect/p1.jpg"
import p2 from "../img/proyect/p2.jpg";
import p3 from "../img/proyect/p3.jpg";
import p4 from "../img/proyect/p4.jpg";
import p5 from "../img/proyect/p5.jpg";
import p6 from "../img/proyect/p6.jpg";

const Proyect =()=>{
    return (
      <div className="proyect">
        <div className="proyectConte">

          <div className="proyectocard">
            <div className="proyectimg">
              <img src={p1} alt="" />
            </div>
            <div className="proyecttext">
              <h4>App con chat local</h4>
              <p>
                La aplicación es una plataforma de comunicación y gestión de
                tareas diseñada para mejorar la colaboración y la eficiencia
                dentro de una empresa al permitir que los usuarios de diferentes
                áreas trabajen juntos de manera efectiva.
              </p>
              <a
                href="https://github.com/rafaelrr1/app_local"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
          </div>

          <div className="proyectocard">
            <div className="proyectimg">
              <img src={p2} alt="" />
            </div>
            <div className="proyecttext">
            <h4>Agenda de usuario</h4>
            <p>
              La aplicación es una agenda de usuario diseñada para programar y
              recordar eventos y tareas en un calendario. Utiliza tecnologías
              como Foundation, jQuery, PHP y Materialize para ofrecer una
              interfaz de usuario personalizable y una funcionalidad dinámica
              para procesar y almacenar información del usuario.
            </p>
            <a href="https://rafaelrr1.github.io/base-de-datos/" target="_blank" rel="noreferrer">Ver más</a>
            </div>
          </div>

          <div className="proyectocard">
            <div className="proyectimg">
              <img src={p3} alt="" />
            </div>
            <div className="proyecttext">
            <h4>Alquiler de casa</h4>
            <p>
              La plataforma de alquiler de casas cuenta con una tecnología de
              búsqueda avanzada que permite filtrar resultados por ubicación,
              tamaño, precio, entre otros, para encontrar propiedades que
              cumplan con los criterios de búsqueda de manera rápida y
              eficiente. La plataforma es compatible con dispositivos móviles,
              lo que permite buscar propiedades en cualquier momento y lugar.
            </p>
            <a href="https://github.com/rafaelrr1/buscador" target="_blank" rel="noreferrer">Ver más</a>
            </div>
          </div>

          <div className="proyectocard">
            <div className="proyectimg">
              <img src={p5} alt="" />
            </div>
            <div className="proyecttext">
            <h4>e-commerce</h4>
            <p>
              La aplicación es un e-commerce construido con React, JavaScript,
              HTML y CSS que permite a los usuarios comprar y vender productos
              dentro de la plataforma. Su objetivo es proporcionar una
              experiencia de compra y venta en línea sencilla y segura para los
              usuarios. Cuenta con una interfaz intuitiva y fácil de usar que
              permite a los usuarios navegar por los diferentes productos.
            </p>
            <a href="https://github.com/rafaelrr1/tienda_online" target="_blank" rel="noreferrer">Ver más</a>
            </div>
          </div>

          <div className="proyectocard">
            <div className="proyectimg">
              <img src={p4} alt="" />
            </div>
            <div className="proyecttext">
            <h4>Juego de caramelos</h4>
            <p>
              El juego de caramelos creado con JavaScript, jQuery y CSS es un
              juego en línea similar a Candy Crush. El objetivo del juego es
              hacer coincidir tres o más caramelos del mismo tipo en una fila o
              columna para ganar puntos. El juego cuenta con varios niveles,
              cada uno con objetivos específicos que pueden incluir recolectar
              cierta cantidad de caramelos o hacer coincidir caramelos en un
              patrón específico.
            </p>
            <a href="https://rafaelrr1.github.io/Juego-de-dulces/" target="_blank" rel="noreferrer">Ver más</a>
            </div>
          </div>

          <div className="proyectocard">
            <div className="proyectimg">
              <img src={p6} alt="" />
            </div>
            <div className="proyecttext">
            <h4>buscar motos</h4>
            <p>
              La aplicación permite a los usuarios buscar motocicletas
              utilizando diferentes criterios como el modelo, la marca, el año,
              la cilindrada, el tipo de motor, entre otros. Proporciona una
              interfaz de usuario intuitiva y funcionalidades de filtrado
              avanzadas para que los usuarios puedan buscar de manera fácil y
              rápida.
            </p>
            <a href="https://rafaelrr1.github.io/angular/#/cars" target="_blank" rel="noreferrer">Ver más</a>
            </div>
          </div>


        </div>
      </div>
    );
}
export default Proyect;