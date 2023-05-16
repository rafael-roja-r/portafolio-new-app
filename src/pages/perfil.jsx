import React from "react";
import user from "../img/user.png"

const Perfil = ()=>{

    return (
      <div className="perfil">
        <div className="perfilinformacion">
          <div className="perfilsobre">
            <h3>Sobre mi</h3>
            <p>
              Soy Rafael Rojas, soy de Perú, donde estudié computación e
              informática. Con varios años de experiencia en programación, puedo
              abordar con éxito proyectos complejos y desafiantes.
            </p>
            <p>
              Me gradué de Oracle Next Education, lo que me permitió adquirir
              habilidades técnicas de última generación y estar al tanto de las
              últimas tendencias y tecnologías en mi campo. Fuera de mi carrera,
              disfruto de varias actividades como la lectura, la música, los
              videojuegos y el fútbol.
            </p>
            <p>
              Mi objetivo como profesional es seguir evolucionando en el mundo
              de la programación, siempre buscando formas innovadoras de abordar
              proyectos y mejorar en cada uno de ellos. Me comprometo a brindar
              soluciones eficientes y de calidad a mis clientes, manteniendo un
              equilibrio saludable entre mi trabajo y mi vida personal.
            </p>

            <p>
              Me considero una persona con una ética de trabajo sólida y un
              compromiso constante con el aprendizaje y la mejora continua.
              Estoy emocionado de poder aportar mi experiencia y habilidades a
              nuevos proyectos en el futuro.
            </p>
          </div>
          <div className="perfilexpecia">
            <h3>Experiencia</h3>
            <div className="perfilexpconten">
              <div className="perfilempresa">
                <h4>CABINET VISON</h4>
                <h5>Desarrollador de software Full Stack</h5>
                <span>Noviembre 2021 - Diciembre 2022</span>
                <ul>
                    <li>Diseño y mejora de sistemas de diseños inmobiliarios.</li>
                    <li>Gestión de diferentes diseños de muebles.</li>
                    <li>Brindar soporte y despliegue del servicio.</li>
                    <li>Colaborar en el desarrollo de microservicios para el software, </li>
                    <li>creando procesos y mejorando la calidad del sistema.</li>
                    <li>Utilización de tecnologías como CSS, HTML, JavaScript, Java, </li>
                    
                </ul>
            </div>

            <div className="perfilempresa">
                <h4>Framelis</h4>
                <h5>Coordinador de Sistemas</h5>
                <span>Agosto 2017 - Febrero 2022</span>
                <ul>
                    <li>DAdministrar y mantener los sistemas de hardware y software de la organización.</li>
                    <li>Coordinar la implementación de nuevas aplicaciones y sistemas de software en la organización.</li>
                    <li>Supervisar y capacitar al personal de soporte técnico en la resolución de problemas técnicos.</li>
                    <li>Garantizar la seguridad y protección de los sistemas de información y los datos de la organización.</li>
                    <li>Realizar pruebas y evaluaciones de los sistemas para garantizar su eficacia y eficiencia.</li>
                    <li>Identificar y solucionar problemas en los sistemas y aplicaciones de software.</li>
                    <li>Planificar y administrar el presupuesto de tecnología de la información.</li>
                    <li>Gestionar y supervisar los contratos y acuerdos con proveedores de tecnología</li>
                </ul>
            </div>  
            </div>

            

          </div>
        </div>

        <div className="perfilformationuser">
            <div className="perfimg">
                <div className="perfiimgcon">
                  <img src={user} alt="" />
                <h4>Rafael Rojas Reyna</h4>  
                </div>
                
            </div>
            

        </div>
      </div>
    );
}
export default Perfil;