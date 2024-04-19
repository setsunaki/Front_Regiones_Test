import React, {useState, useEffect} from 'react';
import { Global } from '../helpers/Global';
import { Peticion } from '../helpers/Peticion';

const CalleGri = ({ciudadId}) => {
  const [calles, setCalles] = useState([]);
  
  useEffect(() =>{
    obtenerCalles(ciudadId);
  }, [ciudadId]);

  const obtenerCalles = async(ciudadId) =>{
    if(!ciudadId){
      setCalles([]);
      return;
    }
    const {datos} = await Peticion(Global.url+"calles/"+ciudadId);

    if(datos.status === "success"){
      setCalles(datos.Calles);
    }else{
      setCalles([]);
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre calle</th>
        </tr>
      </thead>
      <tbody>
        {calles.map((calle) =>(
          <tr key={calle.id}>
            <td>{calle.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CalleGri;
