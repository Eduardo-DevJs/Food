import React from "react";
import Logo from "../../../public/logo.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <img src={Logo} alt="Logo" />

          <nav>
            <ul className={styles.listMenu}>
              <li>Inicío</li>
              <li>Sobre nós</li>
              <li>Populares</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
