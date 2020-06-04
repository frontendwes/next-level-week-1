import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import { FiLogIn } from "react-icons/fi";
import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu Marketplace de coleta de residuos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coletas eficientes</p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
