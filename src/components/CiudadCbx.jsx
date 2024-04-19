import React, { useState, useEffect } from 'react';
import { Global } from '../helpers/Global';
import { Peticion } from '../helpers/Peticion';

const CiudadCbx = ({ onSelect, provinciaId }) => {
  
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    obtenerCiudad(provinciaId);
  }, [provinciaId]);

  const obtenerCiudad = async(provinciaId) =>{
    
    if (!provinciaId){
      setCiudades([]);
      return;
    } 
    const {datos} = await Peticion(Global.url+"ciudades/"+provinciaId);

    if(datos.status === "success"){
      setCiudades(datos.Ciudades);
    }else{
      setCiudades([]);
    }
  }

  const obtenerCiudadId = (e)=>{
    const ciudadId = e.target.value;
    onSelect('ciudad', ciudadId);
  }

  return (
    <select onChange={obtenerCiudadId} defaultValue="">
      <option value="">Selecciona una ciudad</option>
      {ciudades.map((ciudad) => (
        <option key={ciudad.id} value={ciudad.id}>
          {ciudad.nombre}
        </option>
      ))}
      {provinciaId === '' && <option value="" disabled hidden>Selecciona una ciudad</option>}
    </select>
  )
}

export default CiudadCbx;