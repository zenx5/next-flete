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

			<section>
			<SectionOne/>
			</section>
			<section>
			<SectionTwo/>
			</section>
			<section>
			<SectionThree/>
			</section>
			<section>
			<SectionFour/>
			</section>
			<section>
			<SectionFive/>
			</section>
		</main>
	</div>
}