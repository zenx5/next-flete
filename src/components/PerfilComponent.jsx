'use client'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Disclosure, Menu, RadioGroup, Switch, Transition } from
  '@headlessui/react'
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from
  '@heroicons/react/20/solid'
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import LineInput from './LineInput'

const user = {
  name: 'Lisa Marie',
  email: 'lisamarie@example.com',
  imageUrl:

    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const subNavigation = [
  { name: 'Perfil', href: 0, icon: UserCircleIcon, current: false },
  { name: 'Contraseña', href: 1, icon: KeyIcon, current: false },
  { name: 'Historial de Pedidos y Pagos', href: 2, icon: CreditCardIcon, current: false },
]
const plans = [
  {
    name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings'
  },
  {
    name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings'
  },
  {
    name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit:
      'Unlimited active job postings'
  },
]
const payments = [
  {
    id: 1,
    date: '1/1/2020',
    datetime: '2020-01-01',
    description: 'Business Plan - Annual Billing',
    amount: 'CA$109.00',
    href: '#',
  },
  // More payments...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PerfilComponent() {
  const [selected, setSelected] = useState(0)
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true)

  return (
    <>
      <div className="h-full">
        <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
              <nav className="space-y-1">
                {subNavigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelected(item.href)}
                    className={classNames(
                      item.href === selected
                        ? 'bg-black text-white'
                        : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center w-full rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-orange-500' : 'text-gray-400 group - hover:text-gray-500',
                        '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                      )}
                    />
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </nav>
            </aside>
            {
              selected === 0 &&
              <div className='h-auto w-full col-start-5 col-span-7'>
                <h1 className='text-center text-xl font-bold'>Datos de Perfil</h1>
                <div className='lg:grid lg:grid-cols-2 lg:gap-5 lg:mt-10'>
                  <div className='flex flex-col'>
                    <label>
                      Nombre
                    </label>
                    <input placeholder='Cesar'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Apellido
                    </label>
                    <input placeholder='Vallenilla'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Fecha Nacimiento
                    </label>
                    <input placeholder='02/11/1995'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Email
                    </label>
                    <input placeholder='cesarev17@gmail.com'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Telefono
                    </label>
                    <input placeholder='1137966282'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Telefono Familiar
                    </label>
                    <input placeholder='4241397963'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Academia
                    </label>
                    <input placeholder='Aviacion Militar Balivariana'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Grado
                    </label>
                    <input placeholder='Grado 1'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      Grado Siguiente
                    </label>
                    <input placeholder='Grado 2'/>
                  </div>
                </div>
              </div>
            }
            {
              selected === 1 && <div className='h-screen w-full col-start-5 col-span-7'>
                <h1>Soy la contraseña</h1>
              </div>
            }
            {
              selected === 2 && <div className='h-screen w-full col-start-5 col-span-7'>
                <h1>Soy la contraseña</h1>
              </div>
            }

          </div >
        </main >
      </div >
    </>
  )
}

