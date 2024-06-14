import React from 'react'
import './styles.css'

function Button({active, name, onClick, somar}) {
    return (
        <div>
            <button onClick={() => onClick(somar +20)} className={active ? 'active-button' : 'disabled-button'}>{name}</button>
            <span></span>
        </div>
    )
};

export default Button