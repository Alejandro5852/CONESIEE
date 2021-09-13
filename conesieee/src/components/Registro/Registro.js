import React, { Component } from 'react'
import './Registro.css'
export default class Registro extends Component {
    SyleCompleted() {
        return {
            backgroundImage: `url(${this.state.urlFoto})`,

        }
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
    async componentDidMount() {
        const res = await fetch('http://localhost:55000/usrnms');
        const data = await res.json();
        this.setState({ credenciales: data });
    }
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

    onUpload = e => {
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderloaded.bind(this)
            reader.readAsBinaryString(file);
        }
    }

    _handleReaderloaded = (readerev) => {
        let binaryString = readerev.target.result;
        this.setState({
            base64: btoa(binaryString)
        });
        this.setState({
            urlFoto: "data:image/png;base64," + this.state.base64
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="caja-registro">
                    <h1>Registro</h1>
                    <h2>Ingresa tu username</h2>
                    <input type="text" className="in-texto-reg" name = "ursnm" onChange={this.onChange}  required></input>
                    <h2>Ingresa tu contraseña</h2>
                    <input type="password" className="in-texto-reg " name = "psswrd" onChange={this.onChange}  required></input>
                    <h2>Ingresa tu nombre</h2>
                    <input type="text" className="in-texto-reg" name = "nombre" onChange={this.onChange} required ></input>
                    <h2>Ingresa tu apellido</h2>
                    <input type="text" className="in-texto-reg" name = "apellido" onChange={this.onChange} required ></input>
                    <h2>Escoge un tier</h2>
                    <select className="combobox" name="tier" id="cars" onChange={this.onChange} required >
                        <option className="combo-item" value="7" >Gold</option>
                        <option className="combo-item" value="21">Silver</option>
                        <option className="combo-item" value="22">Bronze</option>
                    </select>
                    <h2>Selecciona tu fecha de nacimiento</h2>
                    <input id="date" className="fechas" type="date" name = "fecha" onChange={this.onChange} required ></input>
                    <h2>Ingresa tu correo</h2>
                    <input type="email" className="in-texto-reg" name = "email" onChange={this.onChange} required ></input>
                    <h2>Selecciona tu foto de perfil</h2>
                    <input className="foto-uploader" type="file" name="urlFoto" onChange={this.onUpload} accept="image/gif, image/jpeg, image/png"  required/>
                    <br />
                    <br />
                    <div className="foto-box" style={{
                        backgroundImage: `url(${this.state.urlFoto})`
                    }}></div>
                    <input type="submit" className="btn-enviar-reg" ></input>
                </div>
            </form>
        )
    }
}
//                <img className = "foto" alt = "Vista Previa" src = {this.state.urlFoto}/>
/*
                <div className="foto-box">
                    <img className="foto" src={this.state.urlFoto} />
                </div>
*/