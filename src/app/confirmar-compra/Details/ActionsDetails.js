"use client";

import { Disclosure, Transition } from "@headlessui/react";

export default function ActionsDetails({ label, children, ...props }) {
    const handlerClick = (e) => {
        if( props?.onClick ) props.onClick(e)
    }

    return <Disclosure as="div"
        defaultOpen={props?.defaultopen ?? false}
        key={label}>
        {({ open }) => (<>
            <h3 {...props}><Disclosure.Button onClick={handlerClick}>{label}</Disclosure.Button></h3>
            <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-50 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-50 opacity-0"
            >
                <Disclosure.Panel as="div">
                    {children}
                </Disclosure.Panel>
            </Transition>
        </>)}
    </Disclosure>
}