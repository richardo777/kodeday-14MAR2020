async function getAllCharacters(){
    const response = await fetch('https://rickandmortyapi.com/api/character/') //fetch es una funcion de react para realizar peticiones
    const parsedJson = response.json() //se hace parseo de objetos a tipo json
    return parsedJson.results

}

export default{
    getAllCharacters
}