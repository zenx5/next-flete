"use client";

import { Disclosure } from "@headlessui/react";

export default function ActionsDetails({ label, children, ...props }) {
    return <Disclosure as="div"
        key={label}>
        {({ open }) => (<>
            <h3 {...props}><Disclosure.Button>{label}</Disclosure.Button></h3>
            <Disclosure.Panel as="div">
                {children}
            </Disclosure.Panel>
        </>)}
    </Disclosure>
}