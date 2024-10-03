import React from "react";
import styles from "./popular.module.css";
import Frango from "../../../public/frango.png";
import Apimentando from "../../../public/apimentado.png";
import Tradicional from "../../../public/tradicional.png";

export default function SectionPopulares() {
  return (
    <section>
      <div className="container">
        <div className={styles.popularSection}>
          <div className={styles.popular}>
            <h1>Populares</h1>
            <ul className={styles.listaPizzas}>
              <li className={styles.pizza}>
                <img src={Frango} alt="Ramen de Frango" />
                <h2>Ramen de frango</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>R$ 30</span>
              </li>
              <li className={styles.pizza}>
                <img src={Apimentando} alt="Ramen de apimentado" />
                <h2>Ramen de Apimentado</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>R$ 30</span>
              </li>
              <li className={styles.pizza}>
                <img src={Tradicional} alt="Ramen Tradicional" />
                <h2>Ramen de tradicional</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>R$ 30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
