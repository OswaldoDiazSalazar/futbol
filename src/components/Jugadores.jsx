import React from "react"
import { connect } from "react-redux"

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores row text-center" >
            {
            jugadores.map(j => (
                <article className="jugador" key={j.id}>
                <img className="figure-img img-fluid rounded" src={j.foto} alt={j.nombre}/>
                <h3>{j.nombre}</h3>
                <div>
                    <button className="Principal btn btn-primary" onClick = {()=> agregarTitular(j)}>Titular</button>
                    <button className="Segundario btn btn-secondary" onClick = {()=> agregarSuplente(j)}>Suplente</button>
                </div>
            </article>
            ))
            }
        </div>
        
    </section>

)

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador) {
        dispatch({
            type: "AGREGAR SUPLENTE",
            jugador
        })
    }   
})

export default connect(mapStateToProps, mapDispatchToProps) (Jugadores)