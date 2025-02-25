import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/Home/banner/Banner'
import Collection from '../../components/Home/Collection/Collection'
import Design from '../../components/Home/Design/Design'
import BestSeller from '../../components/Home/best_seller/BestSeller'
import Discover from '../../components/Home/discover/Discover'
import Outfit from '../../components/Home/outfit/Outfit'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Collection/>
        <Design/>
        <BestSeller/>
        <Discover/>
        <Outfit/>
    </>
  )
}

export default Home