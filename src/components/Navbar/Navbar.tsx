import React from "react"



function Navbar() {
  return (
    <div className="navbar">
      <a className="title item active" href="#">
        Commonly
      </a>

      <a className="item" href="#">
        Documentation
      </a>
      <a className="item" href="#">
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
