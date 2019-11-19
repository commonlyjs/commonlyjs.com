import React from "react"
import PropTypes from "prop-types"


export interface Props {
  name: string,
  items: string[]
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string)
}


function Section({ name, items }: Props) {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    const target = event.target as HTMLElement
    const snippet = document.querySelector(target.getAttribute('href') || "")
    if (snippet) {
      snippet.scrollIntoView()
    }
  }

  return (
    <>
      <div className="item">
        <div className="header">
          {name}
        </div>
        <div className="menu">
          {items.map((item) => (
            <a key={item} className="item"
               href={`#${item}`}
               onClick={handleClick}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}


export default Section
