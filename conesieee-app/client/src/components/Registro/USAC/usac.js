import React, { useState } from 'react'
import './usac.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useHistory } from 'react-router-dom';

const animatedComponents = makeAnimated();

const Usac = (props) => {

    const [conferencias, setConferencias] = useState(null);

    const [selected, setSelected] = useState([]);

    const [nombre, setNombre] = useState("");

    const [apellido, setApellido] = useState("");

    const [carnet, setCarnet] = useState("No");

    const [cui, setCui] = useState("");

    const [correo, setCorreo] = useState("");

    const [carrera, setCarrera] = useState("Participante");

    const [facultad, setFacultad] = useState("No");

    const [universidad, setUniversidad] = useState("Poblacion General");

    const [size, setSize] = useState(-1);

    const history = useHistory();


    React.useEffect(() => {
        fetch('http://164.90.210.249/api/infoConf')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setConferencias(data);
                console.log(data);
            });
    }, []);

    function onChange(e) {
        if (e.target.name == "nombres") {
            setNombre(e.target.value);
        } else if (e.target.name == "apellidos") {
            setApellido(e.target.value);
        } else if (e.target.name == "carnet") {
            setCarnet(e.target.value);
            setFacultad("Ingenieria");
            setUniversidad("Usac");
        } else if (e.target.name == "cui") {
            setCui(e.target.value);
        } else if (e.target.name == "correo") {
            setCorreo(e.target.value);
        } else if (e.target.name == "facultad") {
            setFacultad(e.target.value);
        }
        else if (e.target.name == "universidad") {
            setUniversidad(e.target.value);
        }
        else {
            setCarrera(e.target.value);
        }
    }
    function onSubmit(e) {
        const info = { nombres: nombre, apellidos: apellido, carnet: carnet, identificacion: cui, correo: correo, carrera: carrera, conferencias: selected, facultad: facultad, universidad: universidad };
        // POST request using fetch with set headers
        if (props.name == "usac") {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            };
            fetch('http://164.90.210.249/api/getUsrU', requestOptions)
                .then(response => response.json())
                .then(data => { if (data.length > 0) { alert("Usted ya se encuentra inscrito") } else { insertUser(info) } });
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            };
            fetch('http://164.90.210.249/api/getUsr', requestOptions)
                .then(response => response.json())
                .then(data => { if (data.length > 0) { alert("Usted ya se encuentra inscrito") } else { insertUser(info) } });
        }
        history.push("/");
    }

    function insertUser(info) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        fetch('http://164.90.210.249/api/newUser', requestOptions);
        const requestOptions2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        fetch('http://164.90.210.249/api/newAsignacion', requestOptions2);
        alert("Su inscripción ha sido registrada exitosamente, en la pagina principal, puede revisar su inscripcion");
    }
    if (props.name == "usac") {
        return (
            <div className="caja-registro-usac">
                <form onSubmit={onSubmit}>
                    <h1>Registro</h1>
                    <h3>Toda la información ingresada en el formulario debe estar escrita correctamente o no se proporcionara diploma </h3>
                    <h2>Ingresa tus nombres</h2>
                    <input type="text" className="in-texto-reg" name="nombres" onChange={onChange} required></input>
                    <h2>Ingresa tus apellidos</h2>
                    <input type="text" className="in-texto-reg" name="apellidos" onChange={onChange} required></input>
                    <h2>Ingresa tu carnet (sin espacios, solo numeros)</h2>
                    <input type="text" className="in-texto-reg " name="carnet" onChange={onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu cui (sin espacios, solo numeros)</h2>
                    <input type="text" className="in-texto-reg" name="cui" onChange={onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu correo institucional</h2>
                    <input type="email" className="in-texto-reg" name="correo" onChange={onChange} required ></input>
                    <h2>Escoge tu  carrera</h2>
                    <select className="combobox" name="carrera" id="cars" onChange={onChange} required >
                        <option className="combo-item" value="Ingeniería Eléctrica" >Ingeniería Eléctrica</option>
                        <option className="combo-item" value="Ingeniería Electrónica" >Ingeniería Electrónica</option>
                        <option className="combo-item" value="Ingeniería Mecánica Eléctrica" >Ingeniería Mecánica Eléctrica</option>
                    </select>
                    <br />
                    <br />
                    <h2>Selecciona las conferencias a las que asistirás</h2>
                    <Select className="conf-usac" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={conferencias}
                        onChange={setSelected}
                    />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
        )
    } else if (props.name == "otros") {
        return (
            <div className="caja-registro-usac">
                <form onSubmit={onSubmit}>
                    <h1>Registro</h1>
                    <h3>Toda la información ingresada en el formulario debe estar escrita correctamente o no se proporcionara diploma </h3>
                    <h2>Ingresa tus nombres</h2>
                    <input type="text" className="in-texto-reg" name="nombres" onChange={onChange} required></input>
                    <h2>Ingresa tus apellidos</h2>
                    <input type="text" className="in-texto-reg" name="apellidos" onChange={onChange} required></input>
                    <h2>Ingresa tu cui (sin espacios, solo numeros)</h2>
                    <input type="text" className="in-texto-reg" name="cui" onChange={onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu correo institucional</h2>
                    <input type="email" className="in-texto-reg" name="correo" onChange={onChange} required ></input>
                    <h2>Ingresa tu carrera</h2>
                    <input type="text" className="in-texto-reg" name="carrera" onChange={onChange} required></input>
                    <h2>Ingresa tu facultad</h2>
                    <input type="text" className="in-texto-reg" name="facultad" onChange={onChange} required></input>
                    <h2>Ingresa tu universidad</h2>
                    <input type="text" className="in-texto-reg" name="universidad" onChange={onChange} required></input>
                    <br />
                    <br />
                    <h2>Selecciona las conferencias a las que asistirás</h2>
                    <Select className="conf-usac" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={conferencias}
                        onChange={setSelected}
                    />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
        )
    } else if (props.name == "poblacion") {
        return (
            <div className="caja-registro-usac">
                <form onSubmit={onSubmit}>
                    <h1>Registro</h1>
                    <h3>Toda la información ingresada en el formulario debe estar escrita correctamente o no se proporcionara diploma </h3>
                    <h2>Ingresa tus nombres</h2>
                    <input type="text" className="in-texto-reg" name="nombres" onChange={onChange} required></input>
                    <h2>Ingresa tus apellidos</h2>
                    <input type="text" className="in-texto-reg" name="apellidos" onChange={onChange} required></input>
                    <h2>Ingresa tu cui (sin espacios, solo numeros)</h2>
                    <input type="text" className="in-texto-reg" name="cui" onChange={onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu correo</h2>
                    <input type="email" className="in-texto-reg" name="correo" onChange={onChange} required ></input>
                    <h2>Selecciona las conferencias a las que asistirás</h2>
                    <Select className="conf-usac" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={conferencias}
                        onChange={setSelected}
                    />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
        )
    } else if (props.name == "extranjeros") {
        return (
            <div className="caja-registro-usac">
                <form onSubmit={onSubmit}>
                    <h1>Registro</h1>
                    <h3>Toda la información ingresada en el formulario debe estar escrita correctamente o no se proporcionara diploma </h3>
                    <h2>Ingresa tus nombres</h2>
                    <input type="text" className="in-texto-reg" name="nombres" onChange={onChange} required></input>
                    <h2>Ingresa tus apellidos</h2>
                    <input type="text" className="in-texto-reg" name="apellidos" onChange={onChange} required></input>
                    <h2>Ingresa tu No. Pasaporte (sin espacios, solo numeros)</h2>
                    <input type="text" className="in-texto-reg" name="cui" onChange={onChange} required pattern="[0-9]*"></input>
                    <h2>Ingresa tu correo</h2>
                    <input type="email" className="in-texto-reg" name="correo" onChange={onChange} required ></input>
                    <h2>Ingresa tu carrera <br /> Puedes poner "Participante"</h2>
                    <input type="text" className="in-texto-reg" name="carrera" onChange={onChange} required></input>
                    <h2>Ingresa tu universidad <br /> Puedes poner "Poblacion General"</h2>
                    <input type="text" className="in-texto-reg" name="universidad" onChange={onChange} required></input>
                    <br />
                    <br />
                    <h2>Selecciona las conferencias a las que asistirás</h2>
                    <Select className="conf-usac" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={conferencias}
                        onChange={setSelected}
                    />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
        )
    } else if (props.name == "catedratico") {
        return (
            <div className="caja-registro-usac">
                <form onSubmit={onSubmit}>
                    <h1>Registro</h1>
                    <h3>Toda la información ingresada en el formulario debe estar escrita correctamente o no se proporcionara diploma </h3>
                    <h2>Ingrese sus nombres</h2>
                    <input type="text" className="in-texto-reg" name="nombres" onChange={onChange} required></input>
                    <h2>Ingrese sus apellidos</h2>
                    <input type="text" className="in-texto-reg" name="apellidos" onChange={onChange} required></input>
                    <h2>Ingrese su registro personal (sin espacios, solo numeros)</h2>
                    <input type="text" className="in-texto-reg " name="carnet" onChange={onChange} required pattern="[0-9]*"></input>
                    <h2>Ingrese su cui (sin espacios, solo numeros)</h2>
                    <input type="text" className="in-texto-reg" name="cui" onChange={onChange} required pattern="[0-9]*"></input>
                    <h2>Ingrese su correo institucional</h2>
                    <input type="email" className="in-texto-reg" name="correo" onChange={onChange} required ></input>
                    <h2>Ingrese el curso que imparte</h2>
                    <input type="text" className="in-texto-reg" name="carrera" onChange={onChange} required></input>
                    <h2>Ingrese su área o escuela</h2>
                    <input type="text" className="in-texto-reg" name="universidad" onChange={onChange} required></input>
                    <br />
                    <br />
                    <h2>Seleccione las conferencias a las que asistirá</h2>
                    <Select className="conf-usac" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={conferencias}
                        onChange={setSelected}
                    />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
        )
    }
}

export default Usac;
