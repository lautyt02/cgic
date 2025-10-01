import {Link} from "react-router-dom"
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development"
const Logo=()=>{
    return <NavHashLink className="min-w-27 py-3" to="/#">
        <img className="objetc-cover h-19 col-span-1" src="/src/assets/images/logo-cgic.svg" alt="logo" />
    </NavHashLink>
    
}
export {Logo}