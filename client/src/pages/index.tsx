import React, { Fragment } from 'react'
import DestinationsSection from '../components/DestinationsSection'
import HeroSection from '../components/HeroSection'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <Fragment>
      <Menu />
      <HeroSection imageUrl="https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <DestinationsSection />
    </Fragment>
  )
}

export default Home