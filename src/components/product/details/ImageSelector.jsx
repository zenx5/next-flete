"use client";
import { useState } from 'react';
import { Tab } from '@headlessui/react'
import { info } from 'autoprefixer';

export default function ImageSelector({ images }) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handlerClickChangeImage = (index, step) => () => {
        if( index===0 && step<=0 ) return;
        if( index>=images.length-1 && step>=0 ) return
        setSelectedIndex(prev => index+step)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return <Tab.Group as="div" className="flex flex-col-reverse" selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.length>1 && images?.map((image) => (
                        <Tab
                            key={image.id}
                            className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                        >
                            {({ selected }) => (
                                <>
                                    <span className="sr-only">{image.name}</span>
                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                        <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
                                    </span>
                                    <span
                                        className={classNames(
                                            selected ? 'ring-indigo-500' : 'ring-transparent',
                                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2 shadow-lg'
                                        )}
                                        aria-hidden="true"
                                    />
                                </>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
            </div>
            
            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                {images?.map((image, index) => (
                    <Tab.Panel key={image.id} className="flex flex-row items-center">
                        {images.length && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 md:invisible " + (index==0 ? "text-gray-500" : "cursor-pointer text-blue-500")} onClick={handlerClickChangeImage(index,-1)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>}
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover object-center sm:rounded-lg shadow-xl"
                        />
                        {images.length && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 md:invisible " + ((index==images.length-1) ? "text-gray-500" : "cursor-pointer text-blue-500")} onClick={handlerClickChangeImage(index,1)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>}

                    </Tab.Panel>
                ))}
            </Tab.Panels>
    </Tab.Group>
}