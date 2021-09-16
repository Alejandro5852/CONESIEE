import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Usac from './components/Registro/USAC/usac'
import Otros from './components/Registro/OtrasUniversidades/otros'
import Extranjeros from './components/Registro/Extranjeros/extranjeros'
import Perfil from './components/Perfil/Perfil'
import Poblacion from './components/Registro/PoblacionGeneral/Poblacion'
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => { return <div className="contenedor-perfil"><Perfil /></div> }
        }>
        </Route>
        <Route exact path="/usac" render={() => { return <div className="contenedor-registro"><Usac /></div> }
        }>
        </Route>
        <Route exact path="/otros" render={() => { return <div className="contenedor-otros"><Otros /></div> }
        }>
        </Route>
        <Route exact path="/extranjeros" render={() => { return <div className="contenedor-extranjeros"><Extranjeros /></div> }
        }>
        </Route>
        <Route exact path="/poblacion" render={() => { return <div className="contenedor-poblacion"><Poblacion /></div> }
        }>
        </Route>
      </Router>);
  }
}
export default App;
