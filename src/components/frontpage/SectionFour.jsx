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
          <h3 className="text-4xl self-center pt-3 pb-4">¿Por qué nosotros?</h3>
        
          <div className="grid grid-cols-2 gap-2 w-full">

            <div className="flex flex-col items-center gap-2">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-48 lg:h-48 sm:mx-9 sm:my-4 rounded-full flex place-items-center border-4">
                <p>Seguridad garantizada en tus envíos</p>
              </div>
              <button className="bg-blue-900 hover:bg-blue-700 text-white w-20 font-bold self-center">
                Ver Más
              </button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-48 lg:h-48 sm:mx-9 sm:my-4 border-4 rounded-full flex place-items-center">
                <p>Seguridad garantizada en tus envíos</p>
              </div>
              <button className="bg-blue-900 hover:bg-blue-700 text-white w-20 font-bold self-center">
                Ver Más
              </button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-48 lg:h-48 sm:mx-9 sm:my-4 border-4 rounded-full flex place-items-center">
                <p>Seguridad garantizada en tus envíos</p>
              </div>
              <button className="bg-blue-900 hover:bg-blue-700 text-white w-20 font-bold self-center">
                Ver Más
              </button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-48 lg:h-48 sm:mx-9 sm:my-4 border-4 rounded-full flex place-items-center">
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