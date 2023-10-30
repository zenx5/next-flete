
import Account from "./Account";
import PasswordChange from "./PasswordChange";
import History from "./History";
import BarSide from './BarSide'
import Marketing from "./Marketing";


const subNavigation = [
  { name: 'Perfil', href: 0, current: false },
  { name: 'Contraseña', href: 1, current: false },
  { name: 'Historial', href: 2, current: false },
  { name: 'Marketing', href: 3, current: false },
]

const payments = [
  {
    id: 1,
    date: '1/1/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$100.00',
    href: '#',
    nroRecibo: "0000000001",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
    cliente: "Cesar Vallenilla",
    identification: "25217739"
  },
  {
    id: 2,
    date: '22/2/2023',
    datetime: '2020-01-01',
    description: '4 Productos',
    amount: '$200.00',
    href: '#',
    nroRecibo: "0000000002",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 3",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 4",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
    client: "Cesar Vallenilla",
    identification: "25217739"
  },
  {
    id: 3,
    date: '10/4/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$100.00',
    href: '#',
    nroRecibo: "0000000002",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
    cliente: "Cesar Vallenilla",
    identification: "25217739"
  },
  // More payments...
]

const orders = [
  {
    id: 1,
    date: '28/7/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$100.00',
    status: 'pendiente',
    href: '#',
    cliente: "Cesar Vallenilla",
    identification: "25217739",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }]
  },
  {
    id: 2,
    date: '13/6/2023',
    datetime: '2020-01-01',
    description: '4 Productos',
    status: 'pagado',
    amount: '$200.00',
    href: '#',
    cliente: "Cesar Vallenilla",
    identification: "25217739",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 3",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 4",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }],
  },
  {
    id: 3,
    date: '09/5/2023',
    datetime: '2020-01-01',
    description: '2 Productos',
    amount: '$70.00',
    status: 'pagado',
    href: '#',
    cliente: "Cesar Vallenilla",
    identification: "25217739",
    details: [{
      name: "Producto 1",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }, {
      name: "Producto 2",
      amount: 50,
      descrip: "medalla",
      qty: 1
    }]
  },
  // More payments...
]


export default function PageProfile({ user }) {

  return (
    <>
      <div className="h-full">
        <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <BarSide
              items={subNavigation}
              contents={[
                <Account key="content-1" user={user} />,
                <PasswordChange key="content-2" />,
                <div key="content-3" className="flex w-full h-full items-center justify-center italic">
                  Aqui va el historial
                </div>,
                <Marketing key="content-4" />
                // <History key="content-3" payments={payments} orders={orders} />
              ]}
            />
          </div >
        </main >
      </div >
    </>
  )
}

