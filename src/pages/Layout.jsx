import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contacts from './components/Contacts'

const Layout = () => {
  return (
    <div className='w-full min-h-screen p-2 '>

        <div id="container" className='w-full h-full bg-[#fe5944] px-6 py-4  relative'>
            <Header/>
            <Body/>
            <About/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout 