import { useEffect, useState } from "react";
import Formulario from "./componentes/formulario.jsx";
import Header from "./componentes/header.jsx";
import ListadoPacientes from "./componentes/listadoPacientes.jsx";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente ,setPaciente]=useState({});
  const eliminarPaciente = id =>{
   const pacientesActualizados=pacientes.filter(paciente=> paciente.id !== id  )
   setPacientes(pacientesActualizados)
  }
  
  useEffect(()=>{
    const obtenerLS= ()=>{
    const resgistrosLS =JSON.parse(localStorage.getItem('pacientes'))??[]// que me mande un arreglo vacio con  ??[]
    setPacientes(resgistrosLS)
  }
  obtenerLS();
  },[])
  useEffect(() =>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])//como dependencia va responder a pacientes
  return (
    <div className="container mx-auto mt-15">
      <Header />
      <div className="md:flex">
        <Formulario 
        pacientes={pacientes} 
        setPacientes={setPacientes} 
        paciente={paciente}
        setPaciente={setPaciente}
      
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
    /*    <> </> */
  );
}

export default App;
