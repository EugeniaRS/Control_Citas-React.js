function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll  md:h-screen">
      <h2 className="font-black text-3xl text-center ">lista de pacientes</h2>
      <p className="text-xl text-center mt-5 mb-10">
        Administra tus {""} <span className="text-indigo-600 font-bold "> Pacientes y Citas</span>
      </p>
    </div>
  );
}

export default ListadoPacientes;
