import { useEffect } from 'react'

import slogan from '../slogan.png'
const Slogan = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById('top')
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div id="slogan">
      <img src={slogan} className="slogan-image" alt="slogan" />
    </div>
  )
}

export default Slogan
