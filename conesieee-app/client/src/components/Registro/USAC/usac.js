import React, { useState } from 'react'
import './usac.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Usac = () => {

    const [conferencias, setConferencias] = useState(null);

    const [selected, setSelected] = useState([]);

    const wrapper = React.createRef();

    React.useEffect(() => {
        fetch('/api/infoConf')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setConferencias(data);
                console.log(data);
            });
    }, []);

    function onChange(e) {

    }

    function onSubmit(e) {
        console.log(selected);
        e.preventDefault();
    }

    return (
        <div className="caja-registro-usac">
            <form onSubmit={onSubmit}>
                <h1>Registro</h1>
                <h2>Ingresa tus nombres</h2>
                <input type="text" className="in-texto-reg" name="nombres" onChange={onChange} required></input>
                <h2>Ingresa tus apellidos</h2>
                <input type="text" className="in-texto-reg" name="apellidos" onChange={onChange} required></input>
                <h2>Ingresa tu carnet (sin espacios)</h2>
                <input type="text" className="in-texto-reg " name="carnet" onChange={onChange} required pattern="[0-9]*"></input>
                <h2>Ingresa tu cui (sin espacios)</h2>
                <input type="text" className="in-texto-reg" name="cui" onChange={onChange} required pattern="[0-9]*"></input>
                <h2>Ingresa tu correo institucional</h2>
                <input type="email" className="in-texto-reg" name="correo" onChange={onChange} required ></input>
                <h2>Escoge tu  carrera</h2>
                <select className="combobox" name="carrera" id="cars" onChange={onChange} required >
                    <option className="combo-item" value="7" >Ingeniería Eléctrica</option>
                    <option className="combo-item" value="7" >Ingeniería Electrónica</option>
                    <option className="combo-item" value="7" >Ingeniería Mecánica Eléctrica</option>
                </select>
                <br />
                <br />
                <h2>Selecciona las conferencias a las que asistirás</h2>
                <Select ref={wrapper} className="conf-usac" name="conferencias"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={conferencias}
                    onChange = {setSelected}
                />
                <input type="submit" className="btn-enviar-reg" ></input>
            </form>
        </div>
    )
}

export default Usac;
