import React, { useState } from "react"
import { Card,Button } from "react-bootstrap"
const comanda = []
export function addComanda(pedido) {
    if (pedido !== undefined)
        comanda.push(pedido)
    return comanda
}
export default function Producto({ image_1920, name, id, list_price }) {
    const [pedido, setPedido] = useState()

    return (
        <article className='col-md-4  col-sm-12'>
            <Card className="card-producto">
            <Card.Img src={`data:image/jpeg;base64,${image_1920}`} alt={name} className='img-producto' />
            <Card.Body>
            <Card.Title>{id} {name}</Card.Title>
            <Card.Text>{list_price}€</Card.Text>
            <Button onClick={() => {
                setPedido({ id, name, list_price });
                addComanda(pedido)
                console.log(comanda);
            }}>Añadir a la Comanda</Button>
            </Card.Body>
            </Card>
            <hr />
        </article>
    )
}