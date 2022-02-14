import React from 'react'

export default function Producto({ image_1920, name, id, list_price }) {
    return (
        <article>
            <img src={`data:image/jpeg;base64,${image_1920}`} alt={name} />
            <p>{id} {name}</p>
            <p>{list_price}€</p>
            <button onClick={() => { console.log(id, name, list_price + '€'); }}>Añadir a la Comanda</button>
            <hr />
        </article>
    )
}