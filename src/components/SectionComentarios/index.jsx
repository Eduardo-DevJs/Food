import React from "react";
import styles from "./comentarios.module.css";
import Avata1 from "../../../public/avatar1.png";
import Avata2 from "../../../public/avatar2.png";
import Stars from "../../../public/stars.png";

export default function SectionComentarios() {
  return (
    <section>
      <div className="container">
        <div className={styles.comentariosSection}>
          <h1>Comentários</h1>

          <ul className={styles.comentarios}>
            <li className={styles.perfil}>
              <img src={Avata1} alt="Foto de perfil da Daniele" />
              <h2>Daniele Almeida</h2>
              <p>Ótimo serviço! Encantada com a qualidade dos pratos.</p>
              <img src={Stars} alt="Estrelas" />
            </li>
            <li className={styles.perfil}>
              <img src={Avata2} alt="Foto de perfil da Ricardo" />
              <h2>Ricardo França</h2>
              <p>
                Não é apenas a comida excelente, o serviço torna a experiência
                especial.
              </p>
              <img src={Stars} alt="Estrelas" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
