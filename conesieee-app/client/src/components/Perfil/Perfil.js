import React, { useState } from 'react'
import './Perfil.css'
import { useHistory } from 'react-router-dom';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const Perfil = () => {

    const [conferencias, setConferencias] = useState(null);

    const [faltantes, setFaltantes] = useState(null);

    const [selected, setSelected] = useState([]);

    const [identificiacion, setIdentificacion] = useState("");

    const [id, setId] = useState("");

    const [asignaciones, setAsignaciones] = useState(null);

    const [asignadas, setAsignadas] = useState(null);

    const [existe, setExiste] = useState(false);
    React.useEffect(() => {
        fetch('http://164.90.210.249/api/conferencias')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setConferencias(data);
                console.log(data);
            });
    }, []);
    const history = useHistory();

    const toUsac = () => {
        history.push("/usac");
    }
    const toOtros = () => {
        history.push("/otros");
    }

    const toExtrangeros = () => {
        history.push("/extranjeros");
    }
    const toPoblacion = () => {
        history.push("/poblacion");
    }
    const toCatedraticos = () => {
        history.push("/catedratico");
    }
    function onChange(e) {
        setIdentificacion(e.target.value);
    }
    function onSubmit(e) {
        const info = { identificacion: identificiacion, correo: "vacio" };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        fetch('http://164.90.210.249/api/asignaciones', requestOptions)
            .then(response => response.json())
            .then(data => { setAsignadas(null); setAsignadas(data) });
        const requestOptions2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };

        fetch('http://164.90.210.249/api/faltantes', requestOptions2)
            .then(response => response.json())
            .then(datos => { setFaltantes(datos) });

        const requestOptions3 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        fetch('http://164.90.210.249/api/asignacionesCaja', requestOptions3)
            .then(response => response.json())
            .then(datos => { setAsignaciones(datos) });

        const requestOptions4 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        fetch('http://164.90.210.249/api/getUsr', requestOptions4)
            .then(response => response.json())
            .then(data => { if (data.length > 0) { setExiste(true) }else {setExiste(false)}});
        e.preventDefault();
    }

    function changeAsignacion(e) {
        const info = { identificacion: identificiacion, conferencias: selected };
        const requestOptions2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        fetch('http://164.90.210.249/api/newAsignacion', requestOptions2);
    }

    function eliminarAsignacion(e) {
        const info = { identificacion: identificiacion, conferencias: selected };
        const requestOptions2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        };
        fetch('http://164.90.210.249/api/eliminarAsign', requestOptions2);
    }
    return (
        <div className="contenedor">
            <div className="titulo"><h1>¿De dónde nos visitas?</h1></div>
            <div className="cards-list">
                <div className="card 1" onClick={toUsac}>
                    <div className="card_image"> <img src="https://ik.imagekit.io/peu7i3asaiq/logo-usac-byempacharte_-iIJocM8FvB.png?updatedAt=1631578403795" /> </div>
                    <div className="card_title title-black">
                        <p>USAC</p>
                    </div>
                </div>

                <div className="card 2" onClick={toOtros}>
                    <div className="card_image">
                        <img src="https://ik.imagekit.io/peu7i3asaiq/depositphotos_320985390-stock-illustration-education-icon-vector-male-group_4rNzPIoIS.jpg?updatedAt=1631581351818" />
                    </div>
                    <div className="card_title title-black">
                        <p>Otra Universidad</p>
                    </div>
                </div>

                <div className="card 3" onClick={toExtrangeros}>
                    <div className="card_image">
                        <img src="https://ik.imagekit.io/peu7i3asaiq/unnamed_WK-768m8FY.jpg?updatedAt=1631581722991" />
                    </div>
                    <div className="card_title title-black">
                        <p>Extranjero</p>
                    </div>
                </div>
                <div className="card 3" onClick={toPoblacion}>
                    <div className="card_image">
                        <img src="https://ik.imagekit.io/peu7i3asaiq/istockphoto-1162454484-612x612_cmBNuCH9Y.jpg?updatedAt=1631645465327" />
                    </div>
                    <div className="card_title title-black">
                        <p>Población General</p>
                    </div>
                </div>
                <div className="card 3" onClick={toCatedraticos}>
                    <div className="card_image">
                        <img src="https://ik.imagekit.io/peu7i3asaiq/images_rXWisFdEG.jpg?updatedAt=1631993636837" />
                    </div>
                    <div className="card_title title-black">
                        <p>Catedráticos</p>
                    </div>
                </div>
            </div>
            <h1 className="titulo">Conferencias</h1>
            <h3 className="aviso">Voltea tu teléfono para ver la tabla de conferencias</h3>
            <table className="tabla-conferencias">
                <thead>
                    <tr>
                        <th>Tema</th>
                        <th>Expositor</th>
                        <th>Área</th>
                        <th>Fecha</th>
                        <th>Hora Inicio</th>
                        <th>Hora Fin</th>
                    </tr>
                    {conferencias && conferencias.map((conferencia) => (
                        <tr key={conferencia.id}><td>{conferencia.tema}</td><td>{conferencia.expositor}</td><td>{conferencia.area}</td><td>{conferencia.fecha}</td><td>{conferencia.inicio}</td><td>{conferencia.fin}</td></tr>
                    ))}
                </thead>
            </table>
            <div className="caja-registro-usac dev">
                <form onSubmit={onSubmit}>
                    <h1>Ver mis conferencias asignadas</h1>
                    <h2>Ingresa tu cui o No.Pasaporte(sin espacios)</h2>
                    <input type="text" className="in-texto-reg" name="cui" onChange={onChange} required pattern="[0-9]*"></input>
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>
            <h3 className="aviso">Voltea tu teléfono para ver la tabla de asignaciones</h3>
            <table className="tabla-conferencias">
                <thead>
                    <tr>
                        <th>Fecha Asignacion</th>
                        <th>Conferencia</th>
                        <th>Fecha de conferencia</th>
                        <th>Hora inicio</th>
                        <th>Hora Fin</th>
                    </tr>
                    {asignadas && asignadas.map((conferencia) => (
                        <tr key={conferencia.asignacion_id}><td>{conferencia.fecha_asignacion}</td><td>{conferencia.tema_conferencia}</td><td>{conferencia.fecha_conferencia}</td><td>{conferencia.hora_inicio}</td><td>{conferencia.hora_fin}</td></tr>
                    ))}
                </thead>
            </table>
            {asignadas != null && asignadas.length > 0 && <div className="caja-registro-usac dev ops">
                <form onSubmit={eliminarAsignacion}>
                    <h2>Selecciona las conferencias que deseas eliminar de tu asignacion</h2>
                    <Select className="conf-usac" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={asignaciones}
                        onChange={setSelected}
                    />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>}
            {existe != null && existe == true  && <div className="caja-registro-usac dev ops">
                <form onSubmit={changeAsignacion}>
                    <h2>Selecciona las conferencias que desees agregar a tu asignacion</h2>
                    <Select className="conf-usac" name="conferencias"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={faltantes}
                        onChange={setSelected}
                    />
                    <input type="submit" className="btn-enviar-reg" ></input>
                </form>
            </div>}
            <div className="title">
                <h1>En caso de invonveniente o dudas escribir al siguiente correo: difusionconesieeusac@gmail.com</h1>
            </div>
            <img className="imagen" src="https://ik.imagekit.io/peu7i3asaiq/Cronograma_Eléctrica_FB__1__xpO84-jNC.png?updatedAt=1632171247431" />
            <img className="imagen" src="https://ik.imagekit.io/peu7i3asaiq/Cronograma_Electrónica_FB__1__ou2zrGYh4l.png?updatedAt=1632171754171" />
            <img className="imagen" src="https://ik.imagekit.io/peu7i3asaiq/CONESIEE_NEGRO_0xBsj6Xhw.png?updatedAt=1631579312932" />
            <img className="imagen" src="https://ik.imagekit.io/peu7i3asaiq/JUNTA-DIRECTIVA-CONESIEE-2021_1_J1ChwEh3U.jpg?updatedAt=1632033982268" />
            <img className="imagen" src="https://ik.imagekit.io/peu7i3asaiq/JUNTA-DIRECTIVA-CONESIEE-2021_2_BmVHP_pGhN.jpg?updatedAt=1632033961390" />
        </div>
    )
}


export default Perfil;
