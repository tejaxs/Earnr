import './Main.css'
import Contact from '../Contact-us/Contact'
import Navbar from '../Navbar/Navbar'
import Creator from '../Creator/Creator'
import HowItWorks from '../How-it-works/HowItWorks'
import KeyHighlights from '../Key-Highlights/KeyHighlights'
import RoadmapContainer from '../Rodmap-container/RoadmapContainer'
import Roadmap from '../RoadMap/RoadMap'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
        <Creator/>
        <HowItWorks/>
        <KeyHighlights/>
        <Roadmap/>
        <Contact/>
    </div>
  )
}

export default Main