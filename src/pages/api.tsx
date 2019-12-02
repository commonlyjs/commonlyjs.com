import React from "react"
import Drawer from "../components/Drawer/Drawer"
import Section from "../components/Drawer/Section/Section"
import Layout from "../components/Layout/Layout"
import Snippet from "../components/Snippet/Snippet"
import members from "../data/api/reflect/members.json"
import pkg from "../data/api/reflect/package.json"



export default (props: any) => {
    console.log(props)

    return <Layout>
        <div className="layout">
            <div className="row">
                <Drawer>
                    <Section
                        name="@commonly/function"
                        items={
                            [
                                "identity"
                            ]
                        }
                    />
                </Drawer>
                <div className="column">
                    <div className="container">
                        <h1 className="header">{pkg.name}</h1>
                        <p>description</p>
                        {members.map((member) =>
                            <Snippet
                                key={member.name}
                                name={member.name}
                                since={member.since}
                                description={member.description}
                                signature={member.signature}
                                examples={member.examples}
                                metadata={member.metadata}
                                pkg={pkg}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
