import { NavBar, Footer } from "./components";

const Layout = ({children})=>{
    return <>
    <NavBar/>
    {children}
    <Footer/>
    </>
}