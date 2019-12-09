import React from "react"
import Drawer from "../components/Drawer/Drawer"
import Section from "../components/Drawer/Section/Section"
import Layout from "../components/Layout/Layout"
import Snippet from "../components/Snippet/Snippet"

import functionMembers from "../data/api/function/members.json"
import functionPkg from "../data/api/function/package.json"
import iterableMembers from "../data/api/iterable/members.json"
import iterablePkg from "../data/api/iterable/package.json"
import mathMembers from "../data/api/math/members.json"
import mathPkg from "../data/api/math/package.json"
import reflectMembers from "../data/api/reflect/members.json"
import reflectPkg from "../data/api/reflect/package.json"
import transducerMembers from "../data/api/transducer/members.json"
import transducerPkg from "../data/api/transducer/package.json"
import typeMembers from "../data/api/type/members.json"
import typePkg from "../data/api/type/package.json"



export default () => {
    return <Layout>
        <div className="layout">
            <div className="row">
                <Drawer>
                    <Section
                        name={functionPkg.name}
                        items={functionMembers.map(member => member.name)}
                    />
                    <Section
                        name={iterablePkg.name}
                        items={iterableMembers.map(member => member.name)}
                    />
                    <Section
                        name={mathPkg.name}
                        items={mathMembers.map(member => member.name)}
                    />
                    <Section
                        name={reflectPkg.name}
                        items={reflectMembers.map(member => member.name)}
                    />
                    <Section
                        name={transducerPkg.name}
                        items={transducerMembers.map(member => member.name)}
                    />
                    <Section
                        name={typePkg.name}
                        items={typeMembers.map(member => member.name)}
                    />
                </Drawer>
                <div className="column">
                    <div className="container">
                        <h1 className="header">{functionPkg.name}</h1>
                        <p>{functionPkg.description}</p>
                        {functionMembers.map((member) =>
                            <Snippet
                                key={member.name}
                                pkgName={functionPkg.name}
                                name={member.name}
                                since={member.since}
                                description={member.description}
                                signature={member.signature}
                                examples={member.examples}
                                metadata={member.metadata}
                                pkg={functionPkg}
                            />
                        )}
                        <h1 className="header">{iterablePkg.name}</h1>
                        <p>{iterablePkg.description}</p>
                        {iterableMembers.map((member) =>
                            <Snippet
                                key={member.name}
                                pkgName={iterablePkg.name}
                                name={member.name}
                                since={member.since}
                                description={member.description}
                                signature={member.signature}
                                examples={member.examples}
                                metadata={member.metadata}
                                pkg={iterablePkg}
                            />
                        )}
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
                        <h1 className="header">{transducerPkg.name}</h1>
                        <p>{transducerPkg.description}</p>
                        {transducerMembers.map((member) =>
                            <Snippet
                                key={member.name}
                                pkgName={transducerPkg.name}
                                name={member.name}
                                since={member.since}
                                description={member.description}
                                signature={member.signature}
                                examples={member.examples}
                                metadata={member.metadata}
                                pkg={transducerPkg}
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
                                pkg={typePkg}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
