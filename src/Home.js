import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeatureProducts from './components/FeatureProducts'

const Home = () => {
  const home='SampleKart'
  return (<>
    <HeroSection name={home}/>
    <FeatureProducts/>
    <Services/>
    <Trusted/></>
  )
}

export default Home