import React from "react"
import Drawer from "../components/Drawer/Drawer"
import Section from "../components/Drawer/Section/Section"
import Layout from "../components/Layout/Layout"
import Snippet from "../components/Snippet/Snippet"
import reflectMembers from "../data/api/reflect/members.json"
import reflectPkg from "../data/api/reflect/package.json"



export default () => {
    return <Layout>
        <div className="layout">
            <div className="row">
                <Drawer>
                    <Section
                        name={reflectPkg.name}
                        items={reflectMembers.map(member => member.name)}
                    />
                </Drawer>
                <div className="column">
                    <div className="container">
                        <h1 className="header">{reflectPkg.name}</h1>
                        <p>{reflectPkg.name}</p>
                        {reflectMembers.map((member) =>
                            <Snippet
                                key={member.name}
                                name={member.name}
                                since={member.since}
                                description={member.description}
                                signature={member.signature}
                                examples={member.examples}
                                metadata={member.metadata}
                                pkg={reflectPkg}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
