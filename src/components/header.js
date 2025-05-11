import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Residencial Bela Vista</h1>
      <nav>
        <ul>
          <li>
            {window.location.pathname === '/vagas' ? (
              <Link to="/">Cadastrar</Link>
            ) : (
              <Link to="/vagas">Vagas Cadastradas</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;