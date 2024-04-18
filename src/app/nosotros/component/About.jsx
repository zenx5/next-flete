'use client'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function About() {

	return (
		<div className=" h-auto mt-20 pt-8 pb-20 mb-20 rounded-md bg-gradient-to-b from-slate-100 border-4 border-blue-600">
			<h1 className="text-4xl font-bold mb-4 px-4 lg:px-48 mt-14">Sobre Nosotros</h1>
			<div className="flex flex-col px-6 lg:flex-row lg:justify-between gap-4 lg:gap-2 lg:px-48 mt-14">
				<div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil temporibus delectus a, sapiente omnis, earum unde ducimus optio explicabo molestias ipsum blanditiis! Rerum expedita eligendi illo, quaerat eius molestiae.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil temporibus delectus a, sapiente omnis, earum unde ducimus optio explicabo molestias ipsum blanditiis! Rerum expedita eligendi illo, quaerat eius molestiae.</p>
				</div>
				<div className=" rounded overflow-hidden shadow-lg bg-white">
					<img className="w-full" src="https://via.placeholder.com/600x300" alt="Imagen de muestra" />
					<div className="px-6 py-4">
						<p className="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum dolor.
						</p>
					</div>
				</div>
			</div>
			<h1 className=" text-2xl lg:text-4xl font-bold mb-4 px-4 lg:px-48 mt-14">Nuestros Productos</h1>
			<div className="flex px-6 flex-col justify-between gap-4 lg:px-48 mt-14">
				<div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil temporibus delectus a, sapiente omnis, earum unde ducimus optio explicabo molestias ipsum blanditiis! Rerum expedita eligendi illo, quaerat eius molestiae.</p>
				</div>
				<div className="flex gap-4 flex-col lg:flex-row rounded overflow-hidden shadow-lg bg-white">
					<div>
						<img className="w-full" src="https://via.placeholder.com/600x300" alt="Imagen de muestra" />
						<div className="px-6 py-4">
							<p className="text-gray-700 text-base">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum dolor.
							</p>
						</div>

					</div>
					<div>
						<img className="w-full" src="https://via.placeholder.com/600x300" alt="Imagen de muestra" />
						<div className="px-6 py-4">
							<p className="text-gray-700 text-base">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum dolor.
							</p>
						</div>

					</div>
					<div>
						<img className="w-full" src="https://via.placeholder.com/600x300" alt="Imagen de muestra" />
						<div className="px-6 py-4">
							<p className="text-gray-700 text-base">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum dolor.
							</p>
						</div>

					</div>


				</div>
			</div>

		</div>
	)
}