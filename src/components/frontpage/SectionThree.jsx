import Image from "next/image"

export default function SectionThree() {

	return <div className="grid grid-cols-1 md:grid-cols-2 bg-white pt-2 md:pt-8 pb-12 md:pb-16">
        <div className="flex flex-col pt-12 md:pt-16">
        <div className="px-14 md:px-20 py-4"><p className="text-3xl">Sobre Nosotros</p></div>
        <div className="px-14 md:px-20">
        <p className="w-11/12 mb-9">Lorem Ipsum is simply dummy text of the printing
         and typesetting industry. Lorem Ipsum has been the industry’s 
         standard dummy. Lorem Ipsum is simply dummy text of the printing 
         and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
         </p>
         <button className="justify-center bg-blue-900 hover:bg-blue-700 text-white w-1/3 md:w-1/4 font-bold py-2 px-4">
         Ver Más
        </button>
         </div>
        </div>
        <div className="flex flex-col items-center pt-3 ">
          <Image
            src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
            alt=""
            width={100}
            height={100}
            className="h-full w-11/12 object-cover object-center"
          />
      </div>
    </div>

}