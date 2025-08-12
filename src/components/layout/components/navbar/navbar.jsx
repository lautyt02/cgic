import { useState } from "react"
import { NavItem, NavSubItems } from "./components"
const NavBar = ({ items }) => {
    let i = 0
    return <nav>
        {items && items.map(item => {
            i++
            console.log(i)
            return <NavItem key={item.name + i} route={item.route} name={item.name}>
                <NavSubItems items={item.subitems} />
            </NavItem>
        })}
    </nav>
}

export { NavBar }

{/*  */ }