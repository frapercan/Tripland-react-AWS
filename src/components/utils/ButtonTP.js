import React from 'react';
import './ButtonTP.css';

function ButtonTP(props) {

    return(
        <button className={props.red ?  'ButtonTP red' : 'ButtonTP'}
                onClick={() => {props.action ? props.action() : console.log('no hay accion')}} style={props.style} disabled={ props.disabled ? props.disabled : false}>
            {props.contenido}
            {/* {props.icon ? <FontAwesomeIcon icon={props.icon} /> :  ''} */}
        </button>
    );
}

export default ButtonTP;
