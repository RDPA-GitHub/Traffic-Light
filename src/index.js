import React from 'react';
import ReactDOM from 'react-dom/client';

// Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Importando Enlace archivo CSS
import './App.css';

// Importando Componente render
import App from './App';
const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(<App />);