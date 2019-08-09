import React from 'react'
import { connect } from "react-redux"

const Suplentes = ({suplentes, quitarSuplente}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="banca row text-center">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre} />  
                            <h3>{j.nombre}</h3> 
                        </div>
                        <div>
                        <button className="out2 btn btn-danger" onClick = {() => quitarSuplente(j)}>X</button>
                        </div>
                       
                    </article>
                ))
            }
        </div>
    </section>
)
const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR SUPLENTE",
            jugador
        })
    }
})  

export default connect(mapStateToProps,mapDispatchToProps) (Suplentes)