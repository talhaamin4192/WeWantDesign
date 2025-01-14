import React from 'react'
import Hero from './Hero'
import Unlimitied from './Unlimitied'
import Issues from './Issues'
import Collection from './Collection'
import Services from './Services'
import Slider from './Slider'
import Work from './Work'
import Membership from './Membership'
import Certified from './Certified'
import Results from './Results'
import Queries from './Queries'
import Started from './Started'
import Footer from './Footer'
const Home = () => {
  return (
    <>
    <div className='z-40 '>
    <Hero></Hero>
    <Unlimitied></Unlimitied>
    <Issues></Issues>
    <Collection></Collection>
    <Services></Services>
    <Slider></Slider>
    <Work></Work>
    <Membership></Membership>
    <Certified></Certified>
    <Results></Results>
    <Queries></Queries>
    <Started></Started>
    <div className='h-screen'></div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home