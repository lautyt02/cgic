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
    const isOpenedClasses = "pt-20 w-dvw h-dvh absolute top-0 left-0 flex-col z-3 bg-cgic-gris-claro align-items-center flex-col"
    const isNotOpenedClasses = "w-4/5  flex-row h-full hidden md:flex"
    const isOpenSrc = "/src/assets/icons/close.svg"
    const isNotOpenSrc = "/src/assets/icons/hamburguer-menu.svg"
    const togleIsOpened = () => {
        setMenuIsOpened(!menuIsOpened)
    }
    return <>
        <div className={menuIsOpened ? isOpenedClasses : isNotOpenedClasses} onClick={() => setMenuIsOpened(false)}>
            {items && items.map((item, i) => {
                const key = item.name + i
                console.log(key)
                i++
                return <NavLink key={key} route={item.route} name={item.name} />
            })}
        </div>
        <button className="z-4 w-12 md:hidden" onClick={togleIsOpened}><img src={menuIsOpened ? isOpenSrc : isNotOpenSrc} alt="Abrir o cerrar menu" /></button>
    </>
}
export { NavLinkContainer }

