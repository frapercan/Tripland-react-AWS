import React from 'react';

function Card(props){
    return(
        <div className={'Card'}>
            <div className={'imagen'} style={{backgroundImage:`url(${props.imagen})`}}>
                <div className={'title'}>{props.tituloImagen}</div>
                <div className={'categorias'}>{props.categorias}</div>
            </div>
            <div className={'footer'}>
                <div>
                    <div>
                        <p>{props.tituloRuta}</p>
                        <p>NickDeUsuario</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
