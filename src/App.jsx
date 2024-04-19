import React, { useState } from 'react';
import RegionCbx from './components/RegionCbx';
import ProvinciaCbx from './components/ProvinciaCbx';
import CiudadCbx from './components/CiudadCbx';
import CalleGri from './components/CalleGri';

function App() {
  const [filtro, setFiltro] = useState({
    region: '',
    ciudad: '',
    provincia: '',
  });
  
  console.log(filtro);
  const obtenerClave = (campo, valor) => {
    setFiltro({
      ...filtro,
      [campo]: valor,
    });
  };
  
  return (
    <>
      <article className='Home'>
        <h1>Calles de las ciudades</h1>
        <div className='Cbox'>
          <RegionCbx onSelect={obtenerClave}/>
          <ProvinciaCbx onSelect={obtenerClave} regionId={filtro.region === '0' ? '' : filtro.region} />
          <CiudadCbx onSelect={obtenerClave} provinciaId={filtro.region === '0' ? '' : filtro.provincia}/>
        </div>
        <div className='Grilla'>
          <CalleGri ciudadId={filtro.region === '0' ? '' : filtro.ciudad}/>
        </div>
      </article>
    </>
  );
}

export default App;
