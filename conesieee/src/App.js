import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Usac from './components/Registro/USAC/usac'
import Otros from './components/Registro/OtrasUniversidades/otros'
import Extranjeros from './components/Registro/Extranjeros/extranjeros'
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
  /*
  state = {
    tasks: tasks
  }
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  }
  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  }


              <html>
            <head>
                <title>CONESIEEE</title>
            </head>
            <body>
            
            </body>
            </html>
*/

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => 
          {return <div className = "contenedor-perfil"><Perfil/></div>}
        }>
        </Route>
        <Route exact path="/usac" render={() => 
          {return <div className = "contenedor-registro"><Usac/></div>}
        }>
        </Route>
        <Route exact path="/otros" render={() => 
          {return <div className = "contenedor-otros"><Otros/></div>}
        }>
        </Route>         
        <Route exact path="/extranjeros" render={() => 
          {return <div className = "contenedor-extranjeros"><Extranjeros/></div>}
        }>
        </Route>  
      </Router>);
  }
}
export default App;
