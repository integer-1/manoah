import { useEffect, useState } from 'react'
import './App.css'
import Slogan from './components/Slogan'
import Nav from './components/Nav'
import Information from './components/Information'
import Menu from './components/Menu'
import Story from './components/Story'
import ScrollToTopButton from './components/ScrollToTopButton'
import logo from './logo.png'

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
        <div id='top'></div>
        <Nav />
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <Information />
      </div>
      <Menu />
      <Story />
    </div>
  )
}

export default App
