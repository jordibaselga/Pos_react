
const apiURL = 'http://192.168.1.36:8069/proves/productes'
export default function getProductos({ categoriaKeyword = 'All / Consumable / Bebidas' } = {}) {
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const productos = response
            return productos.filter(producto => producto.categ_id[1] === categoriaKeyword)
        })
}