import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './usac.css'

export default class Usac extends Component {
    constructor() {
        super();
        this.state = {
            conferencias: [],
            info: []
        }
    }
    componentDidMount() {
        fetch('/api/conferencias')
            .then(res => res.json())
            .then(conferencias => this.setState({ conferencias }))
        
        let info = [];
        for(let i = 0; i<length(conferencias); i++){
            info.push(conferencias.tema + conferencias.area);
        }
        this.setState({info});
        console.log(info);
    }
    render() {
        return (
            <div className="caja-registro-usac">
                <form onSubmit={this.onSubmit}>
                    <h1>Registro</h1>
                    <h2>Ingresa tus nombres</h2>
                    <input type="text" className="in-texto-reg" name="nombres" onChange={this.onChange} required></input>
                    <h2>Ingresa tus apellidos</h2>
                    <input type="text" className="in-texto-reg" name="apellidos" onChange={this.onChange} required></input>
                    <h2>Ingresa tu carnet (sin espacios)</h2>
                    <input type="text" className="in-texto-reg " name="carne" onChange={this.onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu cui (sin espacios)</h2>
                    <input type="text" className="in-texto-reg" name="dpi" onChange={this.onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu correo institucional</h2>
                    <input type="email" className="in-texto-reg" name="email" onChange={this.onChange} required ></input>
                    <h2>Escoge tu  carrera</h2>
                    <select className="combobox" name="tier" id="cars" onChange={this.onChange} required >
                        <option className="combo-item" value="7" >Ingeniería Eléctrica</option>
                        <option className="combo-item" value="7" >Ingeniería Electrónica</option>
                        <option className="combo-item" value="7" >Ingeniería Mecánica Eléctrica</option>
                    </select>
                    <br />
                    <br />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
        )
    }
}