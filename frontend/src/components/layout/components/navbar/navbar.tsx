import { useEffect, useState } from "react"
import { NavLinkContainer, Logo } from "./components"
const items = [
    { name: "¿Quienes somos?", route: "/projects/hub-de-inovacion#quienes-somos", subitems: [{ route: "/projects/hub-de-inovacion", name: "subitem 1" }, { route: "/projects/hub-de-inovacion", name: "subitem 2" }, { route: "/projects/hub-de-inovacion", name: "subitem 3" }, { route: "/projects/hub-de-inovacion", name: "subitem 4" }, { route: "/projects/hub-de-inovacion", name: "subitem 5" }] },
    { name: "¿Qué es el Hub?", route: "/projects/hub-de-inovacion#", subitems: [{ route: "/projects/hub-de-inovacion", name: "subitem 1" }, { route: "/projects/hub-de-inovacion", name: "subitem 2" }, { route: "/projects/hub-de-inovacion", name: "subitem 3" }, { route: "/projects/hub-de-inovacion", name: "subitem 4" }] },
    { name: "¿Qué va a haber?", route: "/projects/hub-de-inovacion#que-va-a-haber", subitems: [{ route: "/projects/hub-de-inovacion", name: "subitem 1" }, { route: "/projects/hub-de-inovacion", name: "subitem 2" }, { route: "/projects/hub-de-inovacion", name: "subitem 3" }, { route: "/projects/hub-de-inovacion", name: "subitem 4" }, { route: "/projects/hub-de-inovacion", name: "subitem 5" }] }
]
const NavBar = () => {
    return <>
        <nav className="flex bg-cgic-gris-claro h-25 items-center justify-between shadow-xs shadow-cgic-azul fixed top-0 left-0 right-0 w-dvw px-3">
            <Logo />
            <NavLinkContainer items={items}/>
        </nav>
    </>

}

export { NavBar }

