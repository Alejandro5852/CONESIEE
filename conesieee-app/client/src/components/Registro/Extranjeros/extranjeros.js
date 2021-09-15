import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './extranjeros.css'

export default class Extranjeros extends Component {


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
                <div className="caja-registro">
                    <form onSubmit={this.onSubmit}>
                        <h1>Registro</h1>
                        <h2>Ingresa tus nombres</h2>
                        <input type="text" className="in-texto-reg" name = "nombres" onChange={this.onChange}  required></input>
                        <h2>Ingresa tus apellidos</h2>
                        <input type="text" className="in-texto-reg" name = "apellidos" onChange={this.onChange}  required></input>
                        <h2>Ingresa tu No. de pasaporte (sin espacios)</h2>
                        <input type="text" className="in-texto-reg" name = "dpi" onChange={this.onChange} required pattern= "[0-9]*"></input>
                        <h2>Ingresa tu correo personal</h2>
                        <input type="email" className="in-texto-reg" name = "email" onChange={this.onChange} required ></input>
                        <h2>Ingresa tu carrera <br/>(puedes poner "participante")</h2>
                        <input type="text" className="in-texto-reg" name = "nombre" onChange={this.onChange}  required></input>
                        <h2>Ingresa tu universidad <br/>(puedes poner "poblacion general")</h2>
                        <input type="text" className="in-texto-reg" name = "nombre" onChange={this.onChange}  required></input>                        
                        <br />
                        <br />
                        <input type="submit" className="btn-enviar-reg" ></input>
                    </form>
            </div>
        )
    }
}