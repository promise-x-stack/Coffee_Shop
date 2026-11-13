import React from 'react'
import Header from './components/Header/Header'
import LandingPage from './components/Landing_page/Landing_page'
import About from './components/About_page/About'
import Feachers from './components/Feachers_page/Feachers'
import Takeout from './components/Take_out_page/TakeoutPage'
import Contacts from './components/Contacts/Contact'

function App() {
 
  return (
    <>
      <Header></Header>
      <LandingPage></LandingPage>
      <About></About>
      <Feachers></Feachers>
      <Takeout></Takeout>
      <Contacts></Contacts>
    </>
  )
}

export default App
