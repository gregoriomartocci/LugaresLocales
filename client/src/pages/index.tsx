import React, { Fragment } from 'react'
import DestiniesSection from '../components/DestiniesSection'
import HeroSection from '../components/HeroSection'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <Fragment>
      <Menu />
      <HeroSection imageUrl="https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <DestiniesSection />
    </Fragment>
  )
}

export default Home