import About from "./component/About"



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