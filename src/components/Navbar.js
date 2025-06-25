import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo Conecta.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Conecta+" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/tutoriais">Tutoriais</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/suporte">Suporte</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
