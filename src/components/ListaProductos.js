import React, { useEffect, useState } from "react"
import Producto from "./Producto"
import getProductos from "../services/getProductos"
export default function ListaProductos({ keyword }) {
    const [productos, setProductos] = useState([])
    //const comidas = 'All / Saleable / PoS / Food'
    //const bebidas = 'All / Consumable / Bebidas'
    let categoriaKeyword = keyword
    useEffect(function () {
        getProductos({ categoriaKeyword }).then(productos => setProductos(productos))
    },[categoriaKeyword])

    return productos.map(
        ({ id, image_1920, name, list_price }) =>
            <Producto key={id}
                image_1920={image_1920}
                name={name} id={id}
                list_price={list_price} />
    )

}