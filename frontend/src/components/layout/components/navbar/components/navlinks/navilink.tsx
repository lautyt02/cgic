import { NavHashLink } from 'react-router-hash-link'
type NavLinkProps = {
    route: string,
    name: string
}
const NavLink = ({ route, name }: NavLinkProps) => {

    return <NavHashLink className="block lg:text-xl text-center text-cgic-naranja-1 md:flex-1 font-bold py-5 md:py-0 px-2 content-center hover:text-cgic-azul hover:bg-gray-300  hover:font-extrabold md:min-h-1/2 " to={route} smooth>
        {name}
    </NavHashLink>

}
export { NavLink }