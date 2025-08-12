import { NavBar, Footer } from "./components";
const items = [
    { name: "¿Quienes somos?", route: "/projects", subitems:[{route:"/projects", name: "subitem 1"},{route:"/projects", name: "subitem 2"},{route:"/projects", name: "subitem 3"},{route:"/projects", name: "subitem 4"},{route:"/projects", name: "subitem 5"}] },
    { name: "¿Qué es el Hub?", route: "/projects", subitems:[{route:"/projects", name: "subitem 1"},{route:"/projects", name: "subitem 2"},{route:"/projects", name: "subitem 3"},{route:"/projects", name: "subitem 4"}] },
    { name: "¿Qué va a haber?", route: "/projects", subitems:[{route:"/projects", name: "subitem 1"},{route:"/projects", name: "subitem 2"},{route:"/projects", name: "subitem 3"},{route:"/projects", name: "subitem 4"},{route:"/projects", name: "subitem 5"}] }
]

const Layout = ({ children }) => {

    return <>
        <NavBar items={items} />
        {children}
        <Footer />
    </>
}

export { Layout }