import { NavBar,Footer } from "./components"
type LayoutProps = {
    children: React.ReactNode
}
const Layout = ({ children }:LayoutProps) => {
    
    return <>
        <NavBar />
            {children}
        <Footer />
    </>
}

export { Layout }