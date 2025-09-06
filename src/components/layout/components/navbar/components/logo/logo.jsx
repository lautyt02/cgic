import {Link} from "react-router-dom"
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development"
const Logo=()=>{
    return <NavHashLink className="w-1/5 min-w-27" to="/#">
        <img className="ml-2 objetc-cover h-20 m-auto col-span-1" src="/src/assets/images/logo-cgic.svg" alt="logo" />
    </NavHashLink>
    
}
export {Logo}