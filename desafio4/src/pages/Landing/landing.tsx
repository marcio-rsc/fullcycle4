import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Landing(){
    return(
        <div className="page-landing">
          <header>
            <div className="header-content">
                <h1>Full Cycle4 - Desafio4</h1>
            </div>
          </header>
          <main>
            <Link to="/users" className="button-user-list">
              <button type="button">
                Click para Listar Usuários
              </button>
            </Link>
          </main>
          <footer>
          </footer>
      </div>
    );
}

export default Landing;