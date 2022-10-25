import { useState, useEffect } from "react";
import Error from "./error";

function Formulario({ pacientes, setPacientes, paciente ,setPaciente}) {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  
  const generarId=()=>{
    const random =Math.random().toString(36)
    const fecha=Date.now().toString(36)
    return random + fecha;
  }

  useEffect(()=> {
   console.log(paciente)
  },[paciente])

  const validacionFormulario = (e) => {
    e.preventDefault();
    if ([mascota, propietario, email,alta,  sintomas].includes("")) {
      console.log("hay almenos un campo vacio");
      setError(true);
      return;
    }

    setError(false);
    const objPaciente = { mascota, propietario, email,alta, sintomas };
   /*  setPacientes(...pacientes, objPaciente); */
if(paciente.id){
  objPaciente.id=paciente.id
  const pacientesActualizados=pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente:pacienteState)
  setPacientes(pacientesActualizados)
  setPaciente({})

}else{
  objPaciente.id=generarId();
  setPacientes([...pacientes,objPaciente])
}

    setMascota("");
    setAlta("");
    setEmail("");
    setPropietario("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2  lg:w-2/5 mx-5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-center text-lg mb-10">
        Añade Pacientes
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>

      <form
        className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md"
        onSubmit={validacionFormulario}
      >
        {error && 
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        }

        <div>
          <label
            htmlFor="mascota"
            className="block uppercase font-bold text-gray-700 "
          >
            Nombre Paciente
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="nombre mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
            onChange={(e) => setMascota(e.target.value)}
            //set van hacer los  modificadorde la variable van adaoptando todo lo que les dan es yn filtro
            value={mascota}
          />
        </div>

        <div>
          <label
            htmlFor="propietario"
            className="block uppercase font-bold text-gray-700 mt-1.5 "
          >
            Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
            onChange={(e) => setPropietario(e.target.value)}
            value={propietario}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block uppercase font-bold text-gray-700 mt-1.5"
          >
            Correo Electronico prubea github
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label
            htmlFor="alta"
            className="block uppercase font-bold text-gray-700 "
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
            onChange={(e) => setAlta(e.target.value)}
            value={alta}
          />
        </div>
        <div>
          <label htmlFor="sintomas" className="block uppercase font-bold text-gray-700 ">
            Sintomas
          </label>

          <textarea
            id="sintomas"
            name="sintomas"
            placeholder="Sintomas que presenta.."
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-500 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors p-2 rounded-md"
          value={paciente.id ?'Editar paciente':'Agregar Paciente'}
        />
      </form>
    </div>
  );
}

export default Formulario;
