import React, { useState } from 'react'
import Header from './components/Header';
import Listado from './components/Listado';

function App() {

  const [listadoState, setListadoState] = useState([])


  return (
    <div>
      <Header setListadoState={setListadoState} />
      <Listado setListadoState={setListadoState} listadoState={listadoState} />
    </div>
  );
}

export default App;
