import Formulario from "./componentes/formulario.jsx"
import Header from "./componentes/header.jsx"
import ListadoPacientes from "./componentes/listadoPacientes.jsx"
/* import Paciente from "./componentes/paciente.jsx" */
import Error from "./componentes/error.jsx"

function App(){
  /* const[count, setCount]= useState(0) */
  return(
    <div className="container mx-auto mt-15">
       <Header/>
       <Formulario/>
       <ListadoPacientes/>
       <Error/>
      {/*  <Paciente/> */}

</div>
   /*    <> </> */
     
  )
}

export default App