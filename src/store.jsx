import { createStore } from 'redux';

const initialState = {
  jugadores: [{
    id: 1,
    nombre: 'Bruno Fernandez',
    foto: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/b/bru/large/22536.png',
  },
  {
    id: 2,
    nombre: 'Bas Dost',
    foto: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/d/dos/large/20436.png',
  },
  {
    id: 3,
    nombre: 'Bataglia',
    foto: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/r/rod/large/29313.png',
  },
  {
    id: 4,
    nombre: 'Jeremy Mathieu',
    foto: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mat/large/12723.png',
  },
  ],
  titulares: [],
  suplentes: [],
};


const reducerEntrenador = (state = initialState, action) => {
  if (action.type === 'AGREGAR TITULAR') {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === 'AGREGAR SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === 'QUITAR TITULAR') {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),

    };
  }

  if (action.type === 'QUITAR SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),

    };
  }

  return state;
};

export default createStore(reducerEntrenador);
