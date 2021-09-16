import React, { Component } from 'react'
import './Poblacion.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
export default class Poblacion extends Component {
    constructor() {
        super();
        this.wrapper = React.createRef();
        this.state = {
            conferencias: [], 
            nombres: "", 
            apellidos: "",
            cui: "",
            correo: "",
            conferencias:[]
        }
    }
    componentDidMount() {
        fetch('/api/infoConf')
            .then(res => res.json())
            .then(conferencias => this.setState({ conferencias }, () => console.log(this.state)));
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        /*
        const usrs = this.state.credenciales.filter(user => user.Username === this.state.ursnm);
        if (usrs.length === 0) {
            //	myRouter.HandleFunc("/nuevoCliente/{username}/{pass}/{nombre}/{apellido}/{fNac}/{fReg}/{email}/{pic}/{tier}", NuevoCliente)
            let registro = 'http://localhost:55000/nuevoCliente/' + this.state.ursnm + '/' + this.state.psswrd + '/' + this.state.nombre + '/' + this.state.apellido + '/' + this.state.fecha
        } else {
            alert("El username que ingresaste ya está registrado")
        }
        */
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div ref={this.wrapper} className="caja-registro">
                <form onSubmit={this.onSubmit}>
                    <h1>Registro</h1>
                    <h2>Ingresa tus nombres</h2>
                    <input type="text" className="in-texto-reg" name="nombres" onChange={this.onChange} required></input>
                    <h2>Ingresa tus apellidos</h2>
                    <input type="text" className="in-texto-reg" name="apellidos" onChange={this.onChange} required></input>
                    <h2>Ingresa tu cui (sin espacios)</h2>
                    <input type="text" className="in-texto-reg" name="dpi" onChange={this.onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu correo personal</h2>
                    <input type="email" className="in-texto-reg" name="email" onChange={this.onChange} required ></input>
                    <br />
                    <br />
                    <h2>Selecciona las conferencias a las que asistirás</h2>
                    <Select className="conf-poblacio" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={this.state.conferencias}
                    />
                    <br />
                    <br />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
        )
    }
}