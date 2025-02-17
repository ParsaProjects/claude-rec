import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import padsData from './pads'
import { useState } from 'react'
import Pad from './components/Pad'


function App() {

  const [pads, setPads] = useState(padsData)

  function toggle(){
    console.log("clicked!")
  }
  


  const buttonElements = pads.map(pad =>(
    <Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on}  />
  ))

  

  return (
    <>
      <Header />
      <MainContent />
      <div className="pad-container">
        {buttonElements} 
      </div>
    </>
  )
}

export default App