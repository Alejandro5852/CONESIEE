import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './usac.css'

export default class Usac extends Component {


    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        const usrs = this.state.credenciales.filter(user => user.Username === this.state.ursnm );
        if(usrs.length === 0){
            //	myRouter.HandleFunc("/nuevoCliente/{username}/{pass}/{nombre}/{apellido}/{fNac}/{fReg}/{email}/{pic}/{tier}", NuevoCliente)
            let registro = 'http://localhost:55000/nuevoCliente/'+this.state.ursnm+'/'+this.state.psswrd+'/'+this.state.nombre+'/'+this.state.apellido+'/'+this.state.fecha
        }else{
            alert("El username que ingresaste ya está registrado")
        }
        e.preventDefault();
    }


    state = {
        urlFoto: "",
        credenciales: [],
        base64: "",
        ursnm: "",
        psswrd: "",
        nombre: "",
        apellido: "",
        tier: "",
        fecha:"",
        email:""
    }

    render() {
        return (
                <div className="caja-registro-usac">
                    <form onSubmit={this.onSubmit}>
                        <h1>Registro</h1>
                        <h2>Ingresa tu nombre completo</h2>
                        <input type="text" className="in-texto-reg" name = "nombre" onChange={this.onChange}  required></input>
                        <h2>Ingresa tu carnet (sin espacios)</h2>
                        <input type="text" className="in-texto-reg " name = "carne" onChange={this.onChange}  required pattern= "[0-9]*"></input>
                        <h2>Ingresa tu cui (sin espacios)</h2>
                        <input type="text" className="in-texto-reg" name = "dpi" onChange={this.onChange} required pattern= "[0-9]*"></input>
                        <h2>Ingresa tu correo institucional</h2>
                        <input type="email" className="in-texto-reg" name = "email" onChange={this.onChange} required ></input>
                        <h2>Escoge tu  carrera</h2>
                        <select className="combobox" name="tier" id="cars" onChange={this.onChange} required >
                            <option className="combo-item" value="7" >Ingeniería Eléctrica</option>
                            <option className="combo-item" value="7" >Ingeniería Electrónica</option>
                        </select>
                        <br />
                        <br />
                        <input type="submit" className="btn-enviar-reg" ></input>
                    </form>
            </div>
        )
    }
}