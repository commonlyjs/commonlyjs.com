import React, { ReactChild, ReactNode, useRef, useState } from "react"
import PropTypes from "prop-types"



export interface Props {
  children?: ReactNode | ReactChild[]
}

Drawer.propTypes = {
  children: PropTypes.node
}


function Drawer({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    const element = ref.current
    if (element) {
      element.classList.toggle("opened")
      element.classList.toggle("closed")
    }
  }

  return (
    <>
      <div ref={ref} className="column static mobile-hidden drawer">
        <div className="sticky">
          <div className="card drawer-content" tabIndex={0}>
            <div className="header">
              <div className="input stretched">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-search">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input id="search" type="text" autoComplete="off" />
                <label htmlFor="search">
                  Search
                </label>
              </div>
            </div>
            <div className="content">
              <div className="menu">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fab">
        <button className="action" tabIndex={-1}
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               className="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </>
  )
}



export default Drawer
