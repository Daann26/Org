import "./formulario.css"
import Campo from "../Campo/campo.js"
import ListaOpciones from "../listaOpciones/listaopciones.js"
import Boton from "../Bonton/boton.js"
import { useState } from "react"

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const[titulo, actualizarTitulo] = useState("")
    const[color, actualizarColor] = useState("")

    const{ registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("Manejar el Envio");
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorprimario: color});
    }

    return <section className="formulario"> 
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required 
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required 
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
              valor={equipo} 
              actualizarEquipo={actualizarEquipo}
              equipos={props.equipos}
            />
           <Boton>
                Crear
           </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar Titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
            />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex" 
            required 
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton>
                Registrar Equipo
           </Boton>
        </form>
    </section>
}

export default Formulario