import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="encabezado">
        <h1>Portfolio</h1>
        <p>Benjamin Vasquez</p>
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#experience">Experiencia</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>Sobre mí</h2>
        <p>
          Estudio en la secundaria tecnica de la UBA, estoy en 5D en la
          especializacion de TIC (Tecnología de la informacion y comunicacion). 
          Me gusta jugar basket y futbol, mi quipo favorito es el Real Madrid, mi jugador favorito de 
          futbol es Bellingham y de basket Stephen Curry. Me gusta armar cubos rubik y rompecabezas.
        </p>
      </section>
      <section id="projects">
        <h2>Proyectos</h2>
        <div className="project">
          <h3>Nombre del Proyecto 1</h3>
          <p>Descripción breve del proyecto.</p>
          <p>Tecnologías utilizadas: React, Node.js, etc.</p>
          <a
            href="http://127.0.0.1:5500/Ejercicios_html_2/2_activida/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Proyecto
          </a>
        </div>
      </section>
      <section id="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
        </ul>
      </section>
      <section id="experience">
        <h2>Experiencia</h2>
        <div className="experience">
          <h3>Puesto en la Empresa 1  </h3>
          <p>Descripción de las responsabilidades y logros.</p>
          <p>Fechas: Enero 2020 - Presente</p>
        </div>
      </section>
      <section id="contact">
        <h2>Contacto</h2>
        <p>Email: benjaminvasquez289@gmail.com</p>
        <p>Teléfono: 11 2360 4808</p>
        <p>
          <a
            href="https://linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} Benjamin vasquez</p>
      </footer>
    </div>
  );
}

export default App;
