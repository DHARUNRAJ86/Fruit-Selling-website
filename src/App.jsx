import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'

const App=()=>{
  return(
    <>
    <main className="overflow-x-hidden ">
        <Navbar/>
        <Hero/>
        <Menus/>
    </main>
    </>
  )
}
export default App