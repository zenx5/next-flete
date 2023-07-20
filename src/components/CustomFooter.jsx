export default function CustomFooter() {

    const footerNavigation = {
        shop: [
          { name: 'Categoria 1', href: '#' },
          { name: 'Categoria 2', href: '#' },
          { name: 'Categoria 3', href: '#' },
          { name: 'Categoria 4', href: '#' },
          { name: 'Categoria 5', href: '#' },
        ],
        company: [
          { name: 'Quienes somos', href: '#' },
          { name: 'Sostenibilidad', href: '#' },
          { name: 'Noticias', href: '#' },
          { name: 'Carrera', href: '#' },
          { name: 'Terminos y Condiciones', href: '#' },
          { name: 'Privacidad', href: '#' },
        ],
        account: [
          { name: 'Administrar Cuenta', href: '#' },
          { name: 'Devoluciones y Cambios', href: '#' },
          { name: 'Canjear una tarjeta de regalo', href: '#' },
        ],
        connect: [
          { name: 'Contactanos', href: '#' },
          { name: 'Twitter', href: '#' },
          { name: 'Instagram', href: '#' },
          { name: 'Pinterest', href: '#' },
        ],
      }
    

    return <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
        Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                    <div>
                    <h3 className="text-sm font-medium text-white">Tienda</h3>
                    <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.shop.map((item) => (
                        <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-300 hover:text-white">
                            {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div>
                    <h3 className="text-sm font-medium text-white">Compañia</h3>
                    <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-300 hover:text-white">
                            {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                    <div>
                    <h3 className="text-sm font-medium text-white">Cuenta</h3>
                    <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.account.map((item) => (
                        <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-300 hover:text-white">
                            {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div>
                    <h3 className="text-sm font-medium text-white">Conecta</h3>
                    <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.connect.map((item) => (
                        <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-300 hover:text-white">
                            {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
                <div className="mt-12 md:mt-16 xl:mt-0">
                <h3 className="text-sm font-medium text-white">Suscríbete a nuestro boletín</h3>
                <p className="mt-6 text-sm text-gray-300">Las últimas ofertas y ahorros, enviados a su bandeja de entrada semanalmente.</p>
                <form className="mt-2 flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">
                    Direeción de Correo Electronico
                    </label>
                    <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                    <div className="ml-4 flex-shrink-0">
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Registrarse
                    </button>
                    </div>
                </form>
                </div>
            </div>

            <div className="border-t border-gray-800 py-10">
                <p className="text-sm text-gray-400">Copyright &copy; 2023</p>
            </div>
        </div>
    </footer>
}