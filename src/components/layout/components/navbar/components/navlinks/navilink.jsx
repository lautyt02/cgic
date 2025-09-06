import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development"
const NavLink = ({ route, name}) => {

    return <NavHashLink className="text-cgic-naranja-1 text-2xl font-bold px-2 content-center h-full hover:text-cgic-azul hover:bg-gray-300  hover:font-extrabold" to={route} smooth>
        <h3 className="text-center">{name}</h3> 
    </NavHashLink>
   
}
export { NavLink }