import { useEffect, useState } from "react"
import { NavItem, NavSubItems, Logo } from "./components"
const NavBar = ({ items }) => {
    return <nav className="flex bg-cgic-gris-claro p-3 items-center shadow-xs shadow-cgic-azul fixed w-dvw">
        <Logo />
        {items && items.map((item, i) => {
            const key = item.name + i
            console.log(key)
            i++
            return <NavItem key={key} route={item.route} name={item.name} />
        })}
    </nav>
}

export { NavBar }

