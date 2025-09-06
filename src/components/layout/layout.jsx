import { NavBar, Footer } from "./components";

const Layout = ({ children }) => {
    
    return <>
        <NavBar />
        <div className="mt-30 px-[10dvw]">
            {children}
        </div>
        
        <Footer />
    </>
}

export { Layout }