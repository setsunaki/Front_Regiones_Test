import React, { useState, useEffect} from 'react';
import { Global } from '../helpers/Global';
import { Peticion } from '../helpers/Peticion';

const RegionCbx = ({ onSelect }) => {
  const [regiones, setRegiones] = useState([]);

  useEffect(()=>{
    obtenerRegiones();
  }, []);

  const obtenerRegiones = async() =>{
    const {datos} = await Peticion(Global.url+"regiones");

    if(datos.status === "success"){
      setRegiones(datos.Regiones);
    }else{
      setRegiones([]);
    }
  }

  const obtenerIdRegion = (e) => {
    const regionId = e.target.value;
    if(regionId === '0')
    {
      onSelect('region', ''); 
      onSelect('provincia', ''); 
      onSelect('ciudad', ''); 
    }else{
      onSelect('region',regionId);
    }
    
   
  }

  return(
    <select onChange={obtenerIdRegion} defaultValue="">
      <option value= "0">Seleccione una region</option>
      {regiones.map((region) =>(
        <option key={region.id} value={region.id}>
          {region.nombre}
        </option>
      ))}
    </select>
  );

}

export default RegionCbx;
