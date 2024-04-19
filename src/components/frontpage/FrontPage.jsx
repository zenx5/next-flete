import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SliderMain from './SliderMain'
import Footer from '../Footer'


export default function FrontPage() {

	return <div className="">
		<SliderMain />
		<SectionOne/>
		<SectionTwo/>
		<SectionThree/>
		<SectionFour/>
		<SectionFive/>
		<Footer/>
	</div>
}