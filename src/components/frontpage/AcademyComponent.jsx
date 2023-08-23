'use client'

import escudoArmada from '../../../public/ImagesCadeteSiempre/escudoArmada.png'
import escudoGuardia from '../../../public/ImagesCadeteSiempre/guardiaNacionalEscudo.png'
import escudoEjercito from '../../../public/ImagesCadeteSiempre/escudoEjercito.png'
import escudoMilicia from '../../../public/ImagesCadeteSiempre/escudoMilicia.png'
import escudoAviacion from '../../../public/ImagesCadeteSiempre/escudoAviacion.png'
import { useState } from 'react'

const categories = [
    {
        name: 'Fuerza Armada Bolivariana',
        href: '/productos',
        imageSrc: escudoArmada
        ,
    },
    {
        name: 'Guardia Nacional Bolivariana',
        href: '/productos',
        imageSrc: escudoGuardia,
    },
    {
        name: 'Ejercito Bolivariano',
        href: '/productos',
        imageSrc: escudoEjercito,
    },
    {
        name: 'Aviacion Militar Bolivariana',
        href: '/productos',
        imageSrc: escudoAviacion,
    },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },
    { name: 'Milicia Bolivariana', href: '/productos', imageSrc: escudoMilicia },

]

const AcademyComponent = ({ elements }) => {
    const [showAll, setShowAll] = useState(false);

    const displayElements = () => {
        if (showAll) {
            return categories.map((element, index) => (
                <button
                    key={index}
                    onClick={() => router.push(element.href)}
                    className="relative flex h-40 w-28 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                    <span aria-hidden="true" className="absolute inset-0">
                        <img width={500} height={500} src={element.imageSrc} alt="" className="aspect-h-1 aspect-w-1 h-full w-full object-cover object-center" />
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{element.name}</span>
                </button>
            ));
        } else {
            return categories.slice(0, 6).map((element, index) => (
                <button
                    key={index}
                    onClick={() => router.push(element.href)}
                    className="relative flex h-40 w-28 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                    <span aria-hidden="true" className="absolute inset-0">
                        <img width={500} height={500} src={element.imageSrc} alt="" className="aspect-h-1 aspect-w-1 h-full w-full object-cover object-center" />
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{element.name}</span>
                </button>
            ));
        }
    };

    return (
        <div className="block mx-auto p-6">
            <div onClick={() => setShowAll(false)} className=" flex space-x-8 px-4 sm:px-6 lg:px-8 xl:grid xl:grid-cols-6 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {displayElements()}
            </div>
            {!showAll && (
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => setShowAll(true)}
                >
                    Ver más elementos
                </button>
            )}
        </div>
    );
};

export default AcademyComponent;