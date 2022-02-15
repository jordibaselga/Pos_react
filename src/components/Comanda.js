import { useEffect, useState } from "react"
import { addComanda } from './Producto'
import { ListGroup } from "react-bootstrap"

export default function Comanda() {
    //const [Cliente, setCliente] = useState ([])
    const [comanda, setComanda] = useState([])
    useEffect(function () {
        setComanda(addComanda())
        console.log(addComanda());
    }, [comanda])
    return <ListGroup>
        {
            comanda.filter(productos => productos.id !== undefined).map(productos => <ListGroup.Item>{productos.name} {productos.list_price}€</ListGroup.Item>)
        }

    </ListGroup>
}