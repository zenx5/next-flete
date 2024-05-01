import Image from "next/image";

export default function SectionFive() {

	return <section>
    <div className="flex flex-row justify-center bg-zinc-600 h-[46rem] md:h-[30rem] text-white">
      <div className="w-1/2 flex flex-row items-center justify-center">
        <Image
          src="/images/imagenes-para-paginas-web.png"
          alt=""
          width={400}
          height={400}
          className="w-2/3 h-2/3 object-cover object-center" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <h3 className="text-5xl w-10/12 font-medium py-3">Selecciona tu transportista y precio</h3>
        <p className="font-medium w-10/12 p-3">
          HayFlete le da la oportunidad de recibir el mejor precio al darle acceso
          a miles de transportistas que compiten por su negocio para enviar con confianza.
        </p>
        <p className="font-medium w-10/12 p-3">
          ¡Descubre como funciona para Clientes!
        </p>
        <button className="justify-center p-3 bg-white hover:bg-gray-200 text-gray-500 w-40 font-bold py-2 px-4">
          Ver Más
        </button>
      </div>
    </div>

    <div className="flex flex-row justify-center bg-blue-900 h-[46rem] md:h-[30rem] text-white">
        <div className="flex flex-col justify-center items-center  w-1/2">
          <h3 className="text-5xl w-10/12 font-medium py-3">Selecciona tu transportista y precio</h3>
          <p className="font-medium w-10/12 p-3">
            HayFlete le da la oportunidad de recibir el mejor precio al darle acceso
            a miles de transportistas que compiten por su negocio para enviar con confianza.
          </p>
          <p className="font-medium w-10/12 p-3">
            ¡Descubre como funciona para Clientes!
          </p>
          <button className="justify-center p-3 bg-white hover:bg-gray-200 text-gray-500 w-40 font-bold py-2 px-4">
            Ver Más
          </button>
        </div>
        <div className="w-1/2 flex flex-row items-center justify-center">
        <Image
          src="/images/imagenes-para-paginas-web.png"
          alt=""
          width={400}
          height={400}
          className="w-2/3 h-2/3 object-cover object-center" />
      </div>
      </div>


      <div className="flex flex-row justify-center bg-black h-[46rem] md:h-[30rem] text-white">
      <div className="w-1/2 flex flex-row items-center justify-center">
        <Image
          src="/images/imagenes-para-paginas-web.png"
          alt=""
          width={400}
          height={400}
          className="w-2/3 h-2/3 object-cover object-center" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <h3 className="text-5xl w-10/12 font-medium py-3">Selecciona tu transportista y precio</h3>
        <p className="font-medium w-10/12 p-3">
          HayFlete le da la oportunidad de recibir el mejor precio al darle acceso
          a miles de transportistas que compiten por su negocio para enviar con confianza.
        </p>
        <p className="font-medium w-10/12 p-3">
          ¡Descubre como funciona para Clientes!
        </p>
        <button className="justify-center p-3 bg-white hover:bg-gray-200 text-gray-500 w-40 font-bold py-2 px-4">
          Ver Más
        </button>
      </div>
    </div>
  </section>

}