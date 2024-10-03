import React from "react";
import Comida from "../../../public/comida.png"
import styles from "./oriental.module.css";

export default function SectionComidaOriental() {
  return (
    <section>
      <div className="container">
        <div className={styles.sectionOriental}>
          <div className={styles.textosOriental}>
            <h1>Comida Oriental</h1>
            <p>
              A culinária Japonesa é bastante equilibrada, sendo muito rica em
              peixes (ômega 3), vegetais, massas e ingredientes frescos.
            </p>

            <a className={styles.linkCardapio} href="#">Ver o cardápio</a>
          </div>

          <img src={Comida} alt="Comida japonesa" />
        </div>
      </div>
    </section>
  );
}
