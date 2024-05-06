import React, { useEffect, useState } from 'react'
import logo from './logo3.png'
import './App.css'
import Menu from './components/Menu'
import Story from './components/Story'
import Information from './components/Information'
import Nav from './components/Nav'
import Slogan from './components/Slogan'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [showSlogan, setShowSlogan] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlogan(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="App">
      {showSlogan && <Slogan />}
      <ScrollToTopButton />
      <div id="main">
        <Nav />
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <Menu />
      <Story />
      <Information />
    </div>
  )
}

export default App
