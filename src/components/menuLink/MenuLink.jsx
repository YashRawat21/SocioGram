import React from 'react'
import "./MenuLink.css"
const MenuLink = ({Icon , text}) => {
  return (
    <div className='menuLink'>
        {Icon}
        <span className="menuLinkText">{text}</span>
        <span className="menuLinkTextName">{text === "Logout" && "(Yash)"}</span>
    </div>
  )
}

export default MenuLink