import React, { useEffect, useRef } from "react"



export interface Props {

}


function Navbar({}: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            const items = ref.current.querySelectorAll<HTMLAnchorElement>(".item:not(.title)")
            for (const item of Array.from(items)) {
                const href = new URL(item.href)
                if (href.pathname === window.location.pathname) {
                    item.classList.add("active")
                }
            }
        }
    }, [])


    return (
        <div ref={ref} className="navbar">
            <a className="title item" href="/">
                Commonly
            </a>

            <a className="item" href="/">
                Home
            </a>
            <a className="item" href="/api/">
                API Reference
            </a>
            <a className="item" href="/articles/map-filter-reduce/">
                Articles
            </a>

            <div className="separator"/>
            <a className="item" href="https://github.com/commonlyjs/commonly">
                GitHub
            </a>
        </div>
    )
}



export default Navbar
