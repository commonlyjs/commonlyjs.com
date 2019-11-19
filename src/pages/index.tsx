import React from "react"
import DevConsole from "../components/DevConsole/DevConsole"
import Drawer from "../components/Drawer/Drawer"
import Section from "../components/Drawer/Section/Section"

import Layout from "../components/Layout/Layout"
import Snippet from "../components/Snippet/Snippet"
import * as members from "../data/function/members.json"
import * as pkg from "../data/function/package.json"



export default () =>
  <Layout>
    <DevConsole />
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
            <h1 className="header">@commonly/function</h1>
            <p>description</p>
            {members.map((member) =>
              <Snippet
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
