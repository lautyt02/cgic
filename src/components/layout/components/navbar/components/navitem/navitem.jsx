import { useNavigate } from "react-router-dom"
const NavItem = ({ route, name, children }) => {
    let navigateTo=useNavigate()
    const onClickHandle = ()=>{
        navigateTo(route)
    }
    return <div className="" onClick={onClickHandle}>
        <h5>{name}</h5>
        {children}
    </div>

}
export { NavItem }