const Formulario = () => {
  return (
    <div className="md:w-1/2  lg:w-2/5 mx-5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-center text-lg mb-10">
        Añade Pacientes
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>

      <form
        className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md"
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
      
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
        />
        </div>
    
        <div> 

       
        <label
          htmlFor="email"
          className="block uppercase font-bold text-gray-700 "
        >
          Correo Electronico prubea github
        </label>
       
        <input
          id="name"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
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
          name="alta"
          type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
        />
   </div>
   <div> 
        <label className="block uppercase font-bold text-gray-700 ">
          Sintomas
        </label>
       
        <textarea
          id="sintomas"
          name="sintomas"
          placeholder="Sintomas que presenta.."
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md "
        />
     </div>
      </form>
    </div>
  );
};

export default Formulario;
