import { NavLink } from "./navilink"
const NavLinkContainer = ({items})=>{
    return <div className="w-4/5 flex flex-row h-full">
                {items && items.map((item, i) => {
                const key = item.name + i
                console.log(key)
                i++
                return <NavLink key={key} route={item.route} name={item.name} />
            })}
            </div>
}
export {NavLinkContainer}

