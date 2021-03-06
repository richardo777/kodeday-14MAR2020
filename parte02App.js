import React from 'react';
// import logo from './logo.svg';
import './App.css';

import './lib/api';
import api from './lib/api';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalActivo: false,
      personajes: []
    }
  }

  componentDidMount() {
    api.getAllCharacters()
      .then(results => {
        this.setState({
          personajes: results
        })
      })
      .catch(e => console.error(e))
  }

  activarModal() {
    this.setState({
      modalActivo: true
    })
  }

  desactivarModal() {
    this.setState({
      modalActivo: false
    })
  }

  renderCards(p) {
    return (
      <div key={p.id} className='Card' onClick={p => this.activarModal()}>
        <div className='Card-imagen'>
          <figure>
            <img alt='test' src={p.image} />
          </figure>
        </div>
        <div className='Card-descripcion'>
          <div className='Card-name'>
            <h3>{p.name}</h3>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { modalActivo, personajes } = this.state
    // const fakeData = [1,2,3,4,5,6,7]
    const cards = personajes.map(personaje => this.renderCards(personaje))
    console.log(cards)
    return (
      <div className="App">
        <div className='App-contenedor'>
          <h1>Rick and Morty</h1>
          <div className='Cards-contenedor'>
            {cards}
          </div>
          { modalActivo ? (
            <div className='Modal' onClick={e => this.desactivarModal()}>
              <div className='Card-detalle'>
                <div className='Card-imagen'>
                  <figure>
                    <img alt='test' src={'https://rickandmortyapi.com/api/character/avatar/167.jpeg'} />
                  </figure>
                </div>
                <div className='Card-detalle-descripcion'>
                  <div className='descripcion'>
                    <h3>Name</h3>
                    <div className='caracteristica'>
                      <p>Status</p>
                      <p className='caracteristica-valor'>
                        Muerto
                      </p>
                    </div>
                    <div className='caracteristica'>
                      <p>Especie</p>
                      <p className='caracteristica-valor'>
                        Humano
                      </p>
                    </div>
                    <div className='caracteristica'>
                      <p>Genero</p>
                      <p className='caracteristica-valor'>
                        ??
                      </p>
                    </div>
                    <div className='caracteristica'>
                      <p>Origen</p>
                      <p className='caracteristica-valor'>
                        Tierra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null }
        </div>
      </div>


    );
  }
}

export default App;
