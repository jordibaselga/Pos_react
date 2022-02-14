import React from "react"
import Producto from "./Producto"
export default function ListaProductos({ productos }) {


    return productos.map(
        ({ id, image_1920, name, list_price }) =>
            <Producto key={id}
                image_1920={image_1920}
                name={name} id={id}
                list_price={list_price} />
    )

}