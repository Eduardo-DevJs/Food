import React from "react";
import styles from "./sobre.module.css";
import Prato from "../../../public/img segurando prato.png";

export default function SectionSobreNos() {
  return (
    <section>
      <div className="container">
        <div className={styles.sobreSection}>
          <img src={Prato} alt="Segurando prato" />

          <div className={styles.textoSobre}>
            <h5>Sobre nós</h5>
            <h1>Feita de forma tradicional</h1>
            <p>
              Cada prato "feita de forma tradicional" é uma ode à excelência.
              Desde o meticuloso corte do sashimi até a preparação delicada do
              sushi, cada etapa é uma reverência à herança culinária do Japão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
