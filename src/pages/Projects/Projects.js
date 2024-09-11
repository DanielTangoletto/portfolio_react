import React from "react";
import Shadow from "../../assets/Projects/0_shadow.png";
import Booki from "../../assets/Projects/1_booki.png";
import Bluel from "../../assets/Projects/2_sophie_bluel.png";
import Maker from "../../assets/Projects/3_menu_maker.png";
import Nina from "../../assets/Projects/4_nina.png";
import Kasa from "../../assets/Projects/5_kasa.png";
import Grimoire from "../../assets/Projects/6_grimoire.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>MES PROJETS</h1>
      <h2>.. réalisés au cours de ma formation</h2>
      <div className="cards">
        <div className="card">
          <img id="shadow-one" src={Shadow} alt="" />
          <img id="img-one" src={Booki} alt="" />
          <p className="font-one">Booki</p>
          <p className="description-one">
            Réalisation d’un site web responsive en <b>HTML</b> et <b>CSS</b>
          </p>
        </div>
        <div className="card">
          <img id="shadow-two" src={Shadow} alt="" />
          <img id="img-two" src={Bluel} alt="" />
          <p className="font-two">Sophie Bluel</p>
          <p className="description-two">
            Création d’une page dynamique avec <b>Javascript</b>
          </p>
        </div>
        <div className="card">
          <img id="shadow-three" src={Shadow} alt="" />
          <img id="img-three" src={Maker} alt="" />
          <p className="font-three">Menu Maker</p>
          <p className="description-three">
            <b>Planification</b> de développement d’un site web
          </p>
        </div>
        <div className="card">
          <img id="shadow-four" src={Shadow} alt="" />
          <img id="img-four" src={Nina} alt="" />
          <p className="font-four">Nina Carducci</p>
          <p className="description-four">
          <b>Optimisation</b> et <b>debug</b> d’une application web
          </p>
        </div>
        <div className="card">
          <img id="shadow-five" src={Shadow} alt="" />
          <img id="img-five" src={Kasa} alt="" />
          <p className="font-five">Kasa</p>
          <p className="description-five">
          Création d’une application web avec <b>React</b>
          </p>
        </div>
        <div className="card">
          <img id="shadow-six" src={Shadow} alt="" />
          <img id="img-six" src={Grimoire} alt="" />
          <p className="font-six">Mon vieux Grimoire</p>
          <p className="description-six">
          Développement du <b>back-end</b> d’une application web
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
