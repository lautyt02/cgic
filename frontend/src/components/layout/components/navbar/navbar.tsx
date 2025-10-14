import { NavLinkContainer, Logo } from "./components"
const items = [
    { name: "Quienes somos", route: "/projects/hub-de-inovacion#quienes-somos"},
    {name: "Nuestra Propuesta", route:"/projects/hub-de-inovacion#nuestra-propuesta"},
    { name: "Antecedentes", route: "/projects/hub-de-inovacion#antecedentes"},
    { name: "¿Por qué es importante?", route: "/projects/hub-de-inovacion#por-que"},
    { name: "Contactanos", route: "/projects/hub-de-inovacion#hub-contact-form" }
]

const NavBar = () => {
    return <>
        <nav className="flex bg-cgic-gris-claro h-25 items-center justify-between shadow-xs shadow-cgic-azul fixed top-0 left-0 right-0 w-dvw pl-3">
            <Logo />
            <NavLinkContainer items={items}/>
        </nav>
    </>

}

export { NavBar }

