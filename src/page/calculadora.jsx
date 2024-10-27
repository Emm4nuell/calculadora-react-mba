import React, { useState } from "react";
import { CustomButton } from "../components/customButton/CustomButton";
import './calculadora.css'

export const Calculadora = () => {

    const[contador, setContador] = useState(0);

    const incrementa = () => {
        setContador(contador + 1);
    }

    const decrementa = () => {
        if(contador <= 0 ){
            setContador(0)
        }else{
            setContador(contador - 1);
        }
    }

    return(
        <div className="principal">
            <div className="contador">
                <h1>{contador}</h1>
                <div className="button">
                    <CustomButton onClick={decrementa} color={'red'} text={'-'}/>
                    <CustomButton onClick={incrementa} color={'green'} text={'+'}/>
                </div>
            </div>
        </div>
    )
}