import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"



export default () => {
    useEffect(() => {
        window.location.pathname = "/api/"
    }, [])

    return <Layout>
        <div className="layout">
            <div className="row">
                <div className="column">
                    <div className="container">
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
