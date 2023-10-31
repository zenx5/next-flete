import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SliderMain from './SliderMain'


export default function FrontPage() {

	return <div className="mx-5">
		<SliderMain />
		<SectionOne/>
		<SectionTwo/>
		<SectionThree/>
		<SectionFour/>
		<SectionFive/>
	</div>
}