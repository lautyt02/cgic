import { NavLink } from "./navilink"
import { useState } from "react"
type NavLinkContainerProps = {
    items: {
        name: string,
        route: string
    }[]
}

const NavLinkContainer = ({ items }: NavLinkContainerProps) => {

    const [menuIsOpened, setMenuIsOpened] = useState(false)
    const isOpenedClasses = "pt-25 w-dvw h-dvh absolute top-0 left-0 z-3 bg-cgic-gris-claro flex-col justify-items-strech"
    const isNotOpenedClasses = "mx-5 lg:mx-10 w-full  flex-row  hidden md:flex items-strech flex-wrap h-25"
    const isOpenSrc = "/src/assets/icons/close.svg"
    const isNotOpenSrc = "/src/assets/icons/hamburguer-menu.svg"
    const togleIsOpened = () => {
        setMenuIsOpened(!menuIsOpened)
    }
    return <>
        <div className={menuIsOpened ? isOpenedClasses : isNotOpenedClasses} onClick={() => setMenuIsOpened(false)}>
            {items && items.map((item, i) => {
                const key = item.name + i
                i++
                return <NavLink key={key} route={item.route} name={item.name} />
            })}
        </div>
        <button className="z-4 w-12 md:hidden mr-3" onClick={togleIsOpened}><img src={menuIsOpened ? isOpenSrc : isNotOpenSrc} alt="Abrir o cerrar menu" /></button>
    </>
}
export { NavLinkContainer }

