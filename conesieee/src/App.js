import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Registro from './components/Registro/Registro'
import Perfil from './components/Perfil/Perfil'

/* function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
} */

/* class Helloworld extends React.Component {
  state = {
    show: true
  }
  toggleshow = ()=>{
    this.setState({show : !this.state.show})
  }
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick = {this.toggleshow}
          >Toggle show</button>
        </div>
      );
    }else{
      return <div id="hello"><h1>There are not elements</h1> <button onClick = {this.toggleshow}>Toggle show</button></div>
    }
  }
}
function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello Alejandro" subtitle="lorem ipsum" />
      <Helloworld mytext="Hola Mundo" subtitle="component two" />
      <Helloworld mytext="Hello!" subtitle="component three" />
    </div>
  );
} */

class App extends Component {
  state = {
    tasks: {}
  }


  render() {
    return (
      <Router>
        <Route exact path="/" render={() => 
          {return <div className = "contenedor-perfil"><Perfil/></div>}
        }>
        </Route>
        <Route exact path="/registro" render={() => 
          {return <div className = "contenedor-registro"><Registro/></div>}
        }>
        </Route>       
      </Router>);
  }
}
export default App;
