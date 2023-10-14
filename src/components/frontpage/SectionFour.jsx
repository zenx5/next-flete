export default function SectionFour() {

	return <section className="grid grid-cols-1 md:grid-cols-2 bg-amber-600 pt-16 pb-20">
        <div className="w-full flex flex-col items-center">
        <img
        src="/images/camion-falero-frente.png"
        alt=""
        className="h-full w-2/3 object-cover object-center"
      />
       <p className="w-4/5 text-white font-medium text-lg">
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry’s 
        standard dummy. Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
       </p>
        </div>
        <div className="w-full flex flex-col text-white pt-12 items-center text-center font-medium">
        <h3 className="text-4xl self-center pt-3">¿Porque Nosotros?</h3>
        
        <div className="flex flex-wrap justify-center">

        <div className="flex flex-col">
        <div className="w-48 h-48 mx-9 my-4 border-4 rounded-full flex place-items-center">
        <p>Seguridad garantizada en tus envíos</p>
      </div>
      <button className="bg-blue-900 hover:bg-blue-700 text-white w-20 font-bold self-center">
      Ver Más
     </button>
      </div>

      <div className="flex flex-col">
      <div className="w-48 h-48 mx-9 my-4 border-4 rounded-full flex place-items-center">
      <p>Seguridad garantizada en tus envíos</p>
    </div>
    <button className="bg-blue-900 hover:bg-blue-700 text-white w-20 font-bold self-center">
    Ver Más
   </button>
    </div>

      <div className="flex flex-col">
      <div className="w-48 h-48 mx-9 my-4 border-4 rounded-full flex place-items-center">
      <p>Seguridad garantizada en tus envíos</p>
    </div>
    <button className="bg-blue-900 hover:bg-blue-700 text-white w-20 font-bold self-center">
    Ver Más
    </button>
    </div>

    <div className="flex flex-col">
    <div className="w-48 h-48 mx-9 my-4 border-4 rounded-full flex place-items-center">
    <p>Seguridad garantizada en tus envíos</p>
  </div>
  <button className="bg-blue-900 hover:bg-blue-700 text-white w-20 font-bold self-center">
  Ver Más
  </button>
  </div>
    </div>
        </div>
  </section>

}