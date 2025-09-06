import { useEffect, useState } from "react"
import { NavItem, NavSubItems, Logo } from "./components"
const NavBar = ({ items }) => {
    return <>
        <nav className="flex bg-cgic-gris-claro h-25 items-center justify-between shadow-xs shadow-cgic-azul fixed top-0 left-0 right-0 w-dvw">
            <Logo />
            <div className="w-4/5 flex flex-row h-full">
                {items && items.map((item, i) => {
                const key = item.name + i
                console.log(key)
                i++
                return <NavItem key={key} route={item.route} name={item.name} />
            })}
            </div>
        </nav>
    </>

}

export { NavBar }

