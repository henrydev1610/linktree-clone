import React from 'react'
import Header from './Components/Header/Header'
import SocialMedia from './Components/SocialMedia/SocialMedia'
import './app.css'
import Darkmode from './Components/Dark-mode/Darkmode'




const App = () => {
  return (
    <div className='cont-app' id = 'light'>
      
     <Header/>
     <SocialMedia/>
     <Darkmode/>
    </div>
  )
}

export default App
