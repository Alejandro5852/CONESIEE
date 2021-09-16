import React, { useState } from 'react'
import './Perfil.css'
import { useHistory } from 'react-router-dom';

const Perfil = () => {

    const [conferencias, setConferencias] = useState(null);

    React.useEffect(() => {
        fetch('/api/conferencias')
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
            <img className="imagen" src="https://ik.imagekit.io/peu7i3asaiq/CONESIEE_NEGRO_0xBsj6Xhw.png?updatedAt=1631579312932" />
        </div>
    )
}


export default Perfil;
