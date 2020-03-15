npm start

#Apps.js
Class App extends React.Component{
    render(){
        //acá va el codigo que estaba antes de agregar extend
        //Despues renderear todo lo que está dentro de return
        //Borrar todo el contenido dentro de render return, borrar todo lo de dnetro del div
        //borrar todo lo del App.css
        //dentro de DIV crear las cosas, pero no es una buena práctica monezar ahí
        //primero se crea nuevo DIC con clase con ('className') 'App-contenedor'
        //Crear H1 con El titulo deseado
        //Empezar modificaciones dentro del CSS
        /*Hacerla responsive con:
    .App{
        height: 100%;
        text-aling: center;---en archivo Delasinstrucciones
        //despues crear un div con className Cards-container
        //despues crear una CARD dentro de ese DIV con otro div de className Card
        //Despues su estilo de la card
        //dentro de card agregar una imagen (por buena practica dentro de un div) se crea el div con la className Card-imagen
        //con la etiqueta de figure , dentro de etiqueta figure la etiueta <img src={'https://rickandmortyapi.com/api/character/avatar/13.jpeg'}
        //ahora el css de la imagen
        //Otro div dentro de car-image, con className Card-descripcion, dentro de ese, otro div  de className Card-name
        //dentro de ese  un h3 con el titulo
        //despues el css de card-description
        //despues para hacer responcive el texto en css se agrega propiedad
        //Arriba de render pero dentro de la clase  colocar :
        renderCards(){ -->>(se encarga de recivr un objeto y entregar un js)
            return(
                la card va aqui dentro
            )
        }
        //dentro del render y antes del return realizar una constante llamanda fakeData:
        const fakeData = [0, 1, 2, 3, 4, 5, 6, 7]  --> const almacena en memoria
        //una lista o un arrray tiene metodos (iterar o ciclar)
        //aplicar metodo de array de map:
        (---fakeData.map(i => i*2)  --map es una especie de bucle i es una arrawfunction)
        const cards = fakeData.map(e => this.renderCards())
        console.log(cards)
        //dentro de DIV card contenedor  {cards}
        //a la propiedad de Card agregarle hover en CSS
        //agregar alt al image como recomendacion
        //colocar la e dentro de this.renderCards(e) y dentro del div la key={e}
        //se crea un modal dentro del render de {cards}
        //debajo de reasct.component colocar:
        constructor(props){
            super (props)
            this.state = {
                modalActivo: false
            }
        //dentro del DIV className card, colocar un onClick={e => this.activarModal()}>
        //arriba de renderCards colocar:
        activarModal(){
            this.setState({
                modalActivo: true
            })
        //dentro del render colocar:
        const { activarModal } = this.state
        // despeus colocar en la card:
        { modalActivo ? 'Modal Activo' : null }
        //se crea un div con className='Modal
        //Dentro de card modal otro div con className Card-detalle
        //dentro de éste va a ir card-image
        //dentor de card-image otro div className Card-detalle-descripcion
        //dentro de ese mismo otro DIV con class=descripcion
        //despues un titulo  h3 con el nombre del personaje
        //se crean contenedores para las características de className característica
        //cada una debe tener dos cosas <p>estatus y <p className='Característica-valor'>
        //se ocupara esa pequeña estructura verias veces, para genero y cualquier otro detalle
        //Se agrega otra funcion para desactivar modal excactamente igual
        //----FIN del FRONTEND
        //---INICIO del BACKEND
        //endpoints son url que regresan objeto de json
        //dentro de src se crea un nuevo folder llamado lib
        //se crea archivo api.js
        //se hace import en archivo app.js 
        import ./codigo-api.js
        //y al api se hace el esport 
        //en app.js creamos una funcion para cargar los personajes:
        componentDidMount(){
            api.getAllCharacters()
            .then(results => {
                this.set State({
                    personajes: results
                })
            }) //cumple la promesa
            .catch(e => console.error(e))//cacha los errores
        }
        //despues del modal activo en constructor el modal personajes remplazando fakeData en render():
        const {modalActivo, personajes } = this.state
        const cards = personajes.map(personaje => this.renderCards(personaje
        personajes: []
        //dentro de render sacar personajes apra renderCards es p
        //se utiliza el id para el key 
        personaje.id
        //al sourse de la imahen se le pasa p.image por el elemento que indica dentro de la documentación
        //con llaves al igual que en el h3 del nombre del personaje
        {personaje.name} 
        //Dentro de renderCard el onClick pasa el personaje a modal
        //en la funcion de activar modal, se debe agregar el modal
        //agregar el constructor
        

        }
    }
}


//acá estará todo el código https://codeshare.io/G8KD3J
