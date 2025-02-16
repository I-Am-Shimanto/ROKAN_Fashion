import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/Home/banner/Banner'
import Collection from '../../components/Home/Collection/Collection'
import Design from '../../components/Home/Design/Design'
import BestSeller from '../../components/Home/best_seller/BestSeller'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Collection/>
        <Design/>
        <BestSeller/>
    </>
  )
}

export default Home