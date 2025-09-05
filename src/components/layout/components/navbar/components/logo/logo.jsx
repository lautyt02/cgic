import {Link} from "react-router-dom"
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development"
const Logo=()=>{
    return <NavHashLink to="/#">
        <img className="objetc-cover w-35 flex-none my-2" src="/src/assets/logo-cgic.svg" alt="logo" />
    </NavHashLink>
    
}
export {Logo}