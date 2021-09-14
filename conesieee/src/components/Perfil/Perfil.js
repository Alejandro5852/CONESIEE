import React, { Component } from 'react'
import './Perfil.css'
import { useHistory } from 'react-router-dom';

const Perfil = ()=>{

    const history = useHistory();

    const handleClick = () => {
        history.push("/usac");
    }
        return(
            <div class = "contenedor">
                <div class ="titulo"><h1>¿De dónde nos visitas?</h1></div>
                <div class="cards-list">
                    <div class="card 1" onClick={handleClick}>
                        <div class="card_image"> <img src="https://ik.imagekit.io/peu7i3asaiq/logo-usac-byempacharte_-iIJocM8FvB.png?updatedAt=1631578403795" /> </div>
                        <div class="card_title title-black">
                        <p>USAC</p>
                        </div>
                    </div>
    
                    <div class="card 2">
                        <div class="card_image">
                            <img src="https://ik.imagekit.io/peu7i3asaiq/depositphotos_320985390-stock-illustration-education-icon-vector-male-group_4rNzPIoIS.jpg?updatedAt=1631581351818" />
                        </div>
                        <div class="card_title title-black">
                            <p>Otra Universidad</p>
                        </div>
                    </div>
    
                    <div class="card 3">
                        <div class="card_image">
                            <img src="https://ik.imagekit.io/peu7i3asaiq/unnamed_WK-768m8FY.jpg?updatedAt=1631581722991" />
                        </div>
                        <div class="card_title title-black">
                            <p>Extranjero</p>
                        </div>
                    </div>
                </div>
                <img class = "imagen" src ="https://ik.imagekit.io/peu7i3asaiq/CONESIEE_NEGRO_0xBsj6Xhw.png?updatedAt=1631579312932" />
            </div>
          )
}


export default Perfil;
