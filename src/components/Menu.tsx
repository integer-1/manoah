import React from 'react'
import menu from '../menu1.png'

const cvFileUrl =
  'https://drive.google.com/file/d/1AYzxYkSrIBNTwqyNI4ZC3hTwQM4sFAct/view?usp=drive_link'
const cvFileName = 'manoah-menu.pdf'

const Menu = () => {
  const downloadPDF = (url: string) => {
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', cvFileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div id="menu">
      <div className="menu-box">
        <img src={menu} className="menu-image" alt="menu" />
        <p className="menu-text">
          Manoah's Premium Quality Katsu showcases our dedication to culinary
          excellence. We make our own breadcrumbs, ensuring each katsu is
          perfectly crisp and flavorful. This meticulous process highlights the
          tender, juicy meat, providing a superior dining experience. <br />
          <br />
          Enjoy a refined katsu that stands out as a true delight at Manoah,
          where every meal is crafted to perfection.
        </p>
        <button
          className="download"
          onClick={() => {
            downloadPDF(cvFileUrl)
          }}
        >
          <span className="underline-text">MENU</span>
        </button>
      </div>
    </div>
  )
}

export default Menu
