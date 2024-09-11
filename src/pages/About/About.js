import React from "react";
import BG from "../../assets/bg.png";
import Avatar from "../../assets/avatar.png";

const About = () => {
  return (
    <div className="about">
      <img id="background" src={BG} alt="" />
      <img id="avatar" src={Avatar} alt="" />
      <h1>Petite Présentation</h1>
      <p>
        Après plusieurs années à travailler dans la grande distribution, mon choix s’est orienté sur une reconversion professionnelle vers le développement web.<br/><br/>
        C'est un domaine qui me passionne beaucoup, c'est ainsi que j'ai suivi une formation avec OpenClassrooms. Celle-ci m'a permis d'en apprendre plus sur
        les langages et techniques utilisés dans ce milieu. J’ai obtenu le diplôme tout récemment et je souhaiterais développer ces connaissances en entreprise.<br/><br/>
        Passionné aussi par le design, j'ai réalisé la maquette de ce site avec l'outil Figma et codé le site avec React.
      </p>
    </div>
  );
};

export default About;
