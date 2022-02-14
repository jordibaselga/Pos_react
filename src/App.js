import React, { useEffect, useState } from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import getProductos from './services/getProductos';



function App() {
  const [productos, setProductos] = useState([])
  //'All / Saleable / PoS / Food'
  //'All / Consumable / Bebidas'
  const comidas = 'All / Saleable / PoS / Food'
  const bebidas = 'All / Consumable / Bebidas'
  let categoriaKeyword = comidas
  useEffect(function () {
    getProductos({ categoriaKeyword }).then(productos => setProductos(productos))
  })

  return (
    <div className="App">
      <nav>
        <button onClick={() => {
          categoriaKeyword = bebidas
          console.log(categoriaKeyword);
        }}>PARA BEBER</button>

        <button onClick={() => {
          categoriaKeyword = comidas
          console.log(categoriaKeyword);
        }}>PARA COMER</button>
      </nav>
      <section className="App-section">
        <ListaProductos productos={productos} />
      </section>
    </div>
  );
}

export default App;
