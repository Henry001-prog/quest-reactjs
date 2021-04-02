import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacao() {
    return(
        <div>
            <Link to="/">Home</Link> |
            <Link to="/servicos">Servicos</Link> |
            <Link to="/contactos">Contactos</Link>
        </div>
    )
}