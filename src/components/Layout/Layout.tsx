import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import "../../stylesheets/reset.scss"
import "../../stylesheets/base.scss"
import "../../stylesheets/critical.scss"
import "../../stylesheets/index.scss"
import Navbar from "../Navbar/Navbar"



export interface Props {
  children: React.ReactChild | React.ReactChild[]
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


function Layout({ children }: Props) {
  return (
    <>
      <Helmet
        title={"Commonly - A modern utility library for JavaScript/TypeScript."}
      >
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
      </Helmet>
      <Navbar/>
      {children}
    </>
  )
}



export default Layout
