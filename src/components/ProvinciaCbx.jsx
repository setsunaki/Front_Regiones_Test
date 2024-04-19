import React, { useState, useEffect} from 'react';
import { Global } from '../helpers/Global';
import { Peticion } from '../helpers/Peticion';



const ProvinciaCbx = ({ onSelect, regionId }) => {
  
  const [provincias, SetProvincias] = useState([]);
  
  useEffect(() => {
    obtenerProvincia(regionId);
  }, [regionId]);

  const obtenerProvincia = async(regionId) =>{
    console.log(regionId);
    if (!regionId){
      SetProvincias([]);
      return;
    } 
    const {datos} = await Peticion(Global.url+"provincias/"+regionId);

    if(datos.status === "success"){
      SetProvincias(datos.Provincias);
    }else{
      SetProvincias([]);
    }
  }

  const obtenerProvinciaId = (e) =>{
    const provinciaId = e.target.value;
    onSelect('provincia',provinciaId);
  }

  return (
    <select onChange={obtenerProvinciaId} defaultValue="">
      <option value="">Selecciona una provincia</option>
      {provincias.map((provincia) => (
        <option key={provincia.id} value={provincia.id}>
          {provincia.nombre}
        </option>
      ))}
      {regionId === '' && <option value="" disabled hidden>Selecciona una provincia</option>}
    </select>
  );
}

export default ProvinciaCbx;