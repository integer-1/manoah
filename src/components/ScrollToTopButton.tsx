import React, { useEffect, useState } from 'react'
import tree from '../tree.png'

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scrollToTopButton ${isVisible ? 'show' : ''}`}
    >
      <img src={tree} className="tree-image" alt="tree" />
      <p className='top'>TOP</p>
    </button>
  )
}

export default ScrollToTopButton
