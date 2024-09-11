import React from "react";
import BG from "../../assets/bg.png";

function Contact() {
  return (
    <div className="forms">
      <img src={BG} alt="" />
      <div className="form-content">
        <h1>Me contacter</h1>
        <form action="" method="get" class="form-example">
          <div class="form-example">
            <label for="name">Votre nom/entreprise </label>
            <input type="text" name="name" id="name" placeholder="Ex : Patrice Martin" required />
          </div>
          <div class="form-example">
            <label for="email">Votre mail </label>
            <input type="email" name="email" id="email" placeholder="Ex : patricemartin@gmail.com" required />
          </div>
          <div class="form-example">
            <label for="message">Laissez votre message </label>
            <textarea id="message" name="message" rows="5" cols="10" placeholder="Insérez votre message.." required></textarea>
          </div>
          <div class="submit-btn">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
