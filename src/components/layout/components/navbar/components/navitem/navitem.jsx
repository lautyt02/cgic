import { useNavigate } from "react-router-dom"
const NavItem = ({ route, name, children }) => {
    let navigateTo=useNavigate()
    const onClickHandle = ()=>{
        navigateTo(route)
    }
    return <div className="text-cgic-naranja-1 text-2xl font-bold px-2  min-h-20 h-full hover:text-cgic-azul hover:bg-gray-300 hover:text- hover:font-extrabold items-center" onClick={onClickHandle}>
        <h5>{name}</h5>
        {children}
    </div>

}
export { NavItem }