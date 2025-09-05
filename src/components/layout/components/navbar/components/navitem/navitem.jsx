import { useNavigate } from "react-router-dom"
const NavItem = ({ route, name, children }) => {
    let navigateTo=useNavigate()
    const onClickHandle = ()=>{
        navigateTo(route)
    }
    return <div className="text-cgic-naranja-1 text-2xl hover:text-cgic-azul p-2" onClick={onClickHandle}>
        <h5>{name}</h5>
        {children}
    </div>

}
export { NavItem }