export const Peticion = async (url) =>{

    let opciones = {
        method: "GET"
    }

    const peticion = await fetch(url, opciones);
    const datos = await peticion.json();

    return {
        datos
    }
}