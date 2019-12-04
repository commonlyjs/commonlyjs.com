import React from "react"
import Drawer from "../components/Drawer/Drawer"
import Section from "../components/Drawer/Section/Section"
import Layout from "../components/Layout/Layout"
import Snippet from "../components/Snippet/Snippet"

import mathMembers from "../data/api/math/members.json"
import mathPkg from "../data/api/math/package.json"
import reflectMembers from "../data/api/reflect/members.json"
import reflectPkg from "../data/api/reflect/package.json"
import typeMembers from "../data/api/type/members.json"
import typePkg from "../data/api/type/package.json"



export default () => {
    return <Layout>
        <div className="layout">
            <div className="row">
                <Drawer>
                    <Section
                        name={mathPkg.name}
                        items={mathMembers.map(member => member.name)}
                    />
                    <Section
                        name={reflectPkg.name}
                        items={reflectMembers.map(member => member.name)}
                    />
                    <Section
                        name={typePkg.name}
                        items={typeMembers.map(member => member.name)}
                    />
                </Drawer>
                <div className="column">
                    <div className="container">
                        <h1 className="header">{mathPkg.name}</h1>
                        <p>{mathPkg.description}</p>
                        {mathMembers.map((member) =>
                            <Snippet
                                key={member.name}
                                pkgName={mathPkg.name}
                                name={member.name}
                                since={member.since}
                                description={member.description}
                                signature={member.signature}
                                examples={member.examples}
                                metadata={member.metadata}
                                pkg={mathPkg}
                            />
                        )}
                        <h1 className="header">{reflectPkg.name}</h1>
                        <p>{reflectPkg.description}</p>
                        {reflectMembers.map((member) =>
                            <Snippet
                                key={member.name}
                                pkgName={reflectPkg.name}
                                name={member.name}
                                since={member.since}
                                description={member.description}
                                signature={member.signature}
                                examples={member.examples}
                                metadata={member.metadata}
                                pkg={reflectPkg}
                            />
                        )}
                        <h1 className="header">{typePkg.name}</h1>
                        <p>{typePkg.description}</p>
                        {typeMembers.map((member) =>
                            <Snippet
                                key={member.name}
                                pkgName={typePkg.name}
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
