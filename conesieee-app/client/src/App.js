import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Usac from './components/Registro/USAC/usac'
import Perfil from './components/Perfil/Perfil'
class App extends Component {
  constructor(){
    super();
    this.refUsac = React.createRef();
  }
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => { return <div className="contenedor-perfil"><Perfil /></div> }
        }>
        </Route>
        <Route exact path="/usac" render={() => { return <div className="contenedor-registro"><Usac name = "usac"/></div> }
        }>
        </Route>
        <Route exact path="/otros" render={() => { return <div className="contenedor-otros"><Usac name = "otros"/></div> }
        }>
        </Route>
        <Route exact path="/extranjeros" render={() => { return <div className="contenedor-extranjeros"><Usac name= "extranjeros"/></div> }
        }>
        </Route>
        <Route exact path="/poblacion" render={() => { return <div className="contenedor-poblacion"><Usac name = "poblacion" /></div> }
        }>
        </Route>
      </Router>);
  }
}
export default App;
