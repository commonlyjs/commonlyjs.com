import React from "react"
import PropTypes from "prop-types"



export interface Props {
  name: string
  since: string
  description: string
  examples: string[]
  signature: {
    typeparameters: {
      name: string
      description: null | string
      defaultValue: null | string
      extends: null | string
    }[]
    parameters: {
      name: string
      type: string
      description: null | string
      defaultValue: null | string
    }[]
    returnValue: {
      type: string
      description: null | string
    }
  },
  metadata: {
    source: string,
    specification: string
  },
  pkg: {
    name: string,
    version: string
  }
}

Snippet.propTypes = {
  name: PropTypes.string.isRequired,
  since: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  signature: PropTypes.object.isRequired,
  examples: PropTypes.string.isRequired,
  metadata: PropTypes.object.isRequired,
  pkg: PropTypes.object.isRequired
}


function Snippet({ name, since, description, signature, examples, metadata, pkg }: Props) {
  console.log(pkg)
  return (
    <div id={name} className="card snippet">
      <div className="header">
        <div className="title">{name}</div>
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
      <div className="collapsible">
        <div className="content">
          <h3 className="header">Parameters</h3>
          <table>
            {signature.parameters.map((parameter) =>
              <tr>
                <td><code><strong>{parameter.name}: {parameter.type}</strong></code></td>
                <td><small>{parameter.description}</small></td>
              </tr>
            )}
          </table>
          <p><small><strong>Returns</strong> ({signature.returnValue.type}) {signature.returnValue.description}</small></p>

          <h3 className="header">Metadata</h3>
          <table>
            <tr>
              <td><small><strong>version</strong></small></td>
              <td><small>v{pkg.version}</small></td>
            </tr>
            <tr>
              <td><small><strong>since</strong></small></td>
              <td><small>v{since}</small></td>
            </tr>
          </table>
        </div>
      </div>
      {examples.map((example) =>
        <pre className="example"><code>
          {example}
        </code></pre>
      )}
    </div>
  )
}



export default Snippet
