import { useEffect, useState } from "react"
import { NavItem, NavSubItems, Logo } from "./components"
const NavBar = ({ items }) => {
    return <nav>
        <Logo></Logo>
        {items && items.map((item, i) => {
            const key = item.name + i
            console.log(key)
            i++
            return <NavItem key={key} route={item.route} name={item.name} >
                <NavSubItems items={item.subitems} />
            </NavItem>
        })}
    </nav>
}

export { NavBar }

