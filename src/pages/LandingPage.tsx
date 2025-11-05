import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import NewArrival from '../components/NewArrival'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
// import Collections from '../pages/Collections';

function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Feature/>
        <NewArrival/>
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default Home