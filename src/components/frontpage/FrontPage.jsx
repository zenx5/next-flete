'use client'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'

export default function FrontPage() {

	return <div className="">
		<div className="">
			!Aqui va el Hero!
		</div>
		<main>
			<SectionOne/>
			<SectionTwo/>
			<SectionThree/>
			<SectionFour/>
			<SectionFive/>
		</main>
	</div>
}