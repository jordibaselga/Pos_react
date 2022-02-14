import React, { useState } from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';



function App() {
  const [keyword, setKeyword] = useState('All / Consumable / Bebidas')

  return (
    <div className="App">
      <nav>
        <button onClick={() => setKeyword('All / Consumable / Bebidas')}>PARA BEBER</button>
        <button onClick={() => setKeyword('All / Saleable / PoS / Food')}>PARA COMER</button>
      </nav>
      <section className="App-section">
        <ListaProductos keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
