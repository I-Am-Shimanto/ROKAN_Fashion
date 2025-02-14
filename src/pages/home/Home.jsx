import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/Home/banner/Banner'
import Collection from '../../components/Home/Collection/Collection'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Collection/>
    </>
  )
}

export default Home