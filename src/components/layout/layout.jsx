import { NavBar, Footer } from "./components";
import { useState, useEffect } from "react";
const items = [
    { name: "¿Quienes somos?", route: "/projects/hub-de-inovacion", subitems: [{ route: "/projects/hub-de-inovacion", name: "subitem 1" }, { route: "/projects/hub-de-inovacion", name: "subitem 2" }, { route: "/projects/hub-de-inovacion", name: "subitem 3" }, { route: "/projects/hub-de-inovacion", name: "subitem 4" }, { route: "/projects/hub-de-inovacion", name: "subitem 5" }] },
    { name: "¿Qué es el Hub?", route: "/projects/hub-de-inovacion", subitems: [{ route: "/projects/hub-de-inovacion", name: "subitem 1" }, { route: "/projects/hub-de-inovacion", name: "subitem 2" }, { route: "/projects/hub-de-inovacion", name: "subitem 3" }, { route: "/projects/hub-de-inovacion", name: "subitem 4" }] },
    { name: "¿Qué va a haber?", route: "/projects/hub-de-inovacion", subitems: [{ route: "/projects/hub-de-inovacion", name: "subitem 1" }, { route: "/projects/hub-de-inovacion", name: "subitem 2" }, { route: "/projects/hub-de-inovacion", name: "subitem 3" }, { route: "/projects/hub-de-inovacion", name: "subitem 4" }, { route: "/projects/hub-de-inovacion", name: "subitem 5" }] }
]

const Layout = ({ children }) => {
    
    return <>
        <NavBar items={items} />
        {children}
        <Footer />
    </>
}

export { Layout }