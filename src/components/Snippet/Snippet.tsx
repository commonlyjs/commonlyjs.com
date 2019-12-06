import Prism from "prismjs"
import PropTypes from "prop-types"
import React from "react"


export interface Props {
    pkgName: string
    name: string
    since: null | string
    description: null | string
    examples: string[]
    signature: {
        typeparameters: {
            name: null | string
            description: null | string
            defaultValue: null | string
            extends: null | string
        }[]
        parameters: {
            name: string
            type: null | string
            description: null | string
            defaultValue: null | string
        }[]
        returnValue: {
            type: null | string
            description: null | string
        }
    },
    metadata: {
        source: null | string,
        specification: null | string
    },
    pkg: {
        name: string,
        version: string
    }
}

Snippet.propTypes = {
    pkgName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    since: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    signature: PropTypes.object.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string).isRequired,
    metadata: PropTypes.object.isRequired,
    pkg: PropTypes.object.isRequired
}


function Snippet({ pkgName, name, since, description, signature, examples, metadata, pkg }: Props) {
    const descriptionTransformed = (description || "")
        .replace(/\{@link (.*)\}/g, (g1, g2) => {
            const [url, name] = g2.split(" | ")
            if (/^http(s?):\/\//.test(url)) {
                return `<a href="${url}">${name}</a>`
            } else {
                const [_pkgName, member] = url.split(":")
                return `<a href="#${_pkgName.split("/")[1]}-${member}">${name}</a>`
            }
        })
        .replace(/\*\*(.*)\*\*/g, (g1, g2) => {
            return `<strong>${g2}</strong>`
        })
        .replace(/\*(.*)\*/g, (g1, g2) => {
            return `<em>${g2}</em>`
        })

    let nameTransformed = name
    if (!!signature.parameters.length) {
        const parametersTransformed = signature.parameters.map(parameter => {
            let parameterName = parameter.name
            if (parameter.optional) {
                parameterName = `${parameterName}?`
            }
            if (parameter.variadic) {
                parameterName = `...${parameterName}`
            }
            if (parameter.defaultValue) {
                parameterName = `[${parameterName} = ${parameter.defaultValue}]`
            }
            return parameterName
        })
        nameTransformed =
            `${name}(${parametersTransformed.join(", ")})`
    }

    return (
        <div id={`${pkgName.split("/")[1]}-${name}`} className="card snippet">
            <div className="header">
                <div className="title">{nameTransformed}</div>
            </div>
            <div className="content">
                <p dangerouslySetInnerHTML={{ __html: descriptionTransformed }} />
            </div>
            <div className="collapsible">
                <div className="content">
                    {!!signature.parameters.length && <>
                        <h3 className="header">Parameters</h3>
                        <table>
                            <tbody>
                            {signature.parameters.map((parameter) =>
                                <tr key={parameter.name}>
                                    <td><code><strong>{parameter.variadic && "..."}{parameter.name}: {parameter.type}</strong></code></td>
                                    <td>
                                        <small>
                                            {parameter.description}
                                        </small>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <p><small><strong>Returns</strong>: <code><strong>{signature.returnValue.type}</strong></code> {signature.returnValue.description}</small></p>
                    </>}

                    <h3 className="header">Metadata</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td><small><strong>version</strong></small></td>
                            <td><small>v{pkg.version}</small></td>
                        </tr>
                        <tr>
                            <td><small><strong>since</strong></small></td>
                            <td><small>v{since}</small></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {examples.map((example) =>
                    <pre key={example} className="example language-javascript">
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(example, Prism.languages.javascript, "javascript") }}/>
          </pre>
            )}
        </div>
    )
}


export default Snippet
