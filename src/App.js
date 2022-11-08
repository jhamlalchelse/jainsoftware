import React from 'react'
import Bussiness from './components/Bussiness'
import Carousel from './components/Carousel'
import ClientSecsion from './components/ClientSecsion'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Ourclient from './components/Ourclient'
import Service from './components/Service'

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Service />
      <ClientSecsion/>
      <Bussiness />
      <Ourclient />
      <Footer />
    </>
  );
}

export default App