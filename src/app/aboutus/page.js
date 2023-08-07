import About from "./components/about"


function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function page() {

	return (
		<div>
            <About/>
		</div>
	)
}