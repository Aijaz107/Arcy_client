import { useState, useEffect } from 'react'
import { Navigation } from './navigation'
import { Header } from './header'
// import { Features } from './features'
import { About } from './about'
import { Services } from './services'
import { Gallery } from './gallery'
import {UpvcGallery} from './gallery2'
import { Testimonials } from './testimonials'
// import { Team } from './Team'
import { Contact } from './contact'
import JsonData from "../data/data.json"
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  })

const Main = () =>{
    
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
      setLandingPageData(JsonData)
    }, [])

    return(
        <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        {/* <Features data={landingPageData.Features} /> */}
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery />
        <UpvcGallery></UpvcGallery>
        <Testimonials data={landingPageData.Testimonials} />
        {/* <Team data={landingPageData.Team} /> */}
          <Contact data={landingPageData.Contact} />
      </div>
    )
}

export default Main;