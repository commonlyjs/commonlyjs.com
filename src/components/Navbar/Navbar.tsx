import React from "react"



function Navbar() {
  return (
    <div className="navbar">
      <a className="title item" href="#">
        Commonly
      </a>

      <a className="item active" href="#">
        API Reference
      </a>

      <div className="separator" />
      <a className="item" href="#">
        GitHub
      </a>
    </div>
  )
}



export default Navbar
