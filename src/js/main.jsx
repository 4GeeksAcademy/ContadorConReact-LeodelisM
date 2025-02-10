import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let segundosIniciales = (new Date()).getTime() / 1000;

setInterval(
  () => {
    let segundosRender = (new Date()).getTime() / 1000;
    let diferencia = Math.floor(segundosRender - segundosIniciales);
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Home seconds={diferencia}/>
      </React.StrictMode>,
    )
  },
  1000
)

