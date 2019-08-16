import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({ titulares, quitarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha row text-center">
      {
                titulares.map((j) => (
                  <article className="titular" key={j.id}>
                    <div>
                      <img src={j.foto} alt={j.nombre} />
                      <h3>{j.nombre}</h3>
                    </div>
                    <div>
                      <button className="out1 btn btn-danger" onClick={() => quitarTitular(j)}>X</button>
                    </div>

                  </article>
                ))
            }
    </div>
  </section>
);
const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: 'QUITAR TITULAR',
      jugador,
    });
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
