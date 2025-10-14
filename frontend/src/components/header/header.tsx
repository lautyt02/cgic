type HeaderProps = {
    text: string,
    className?: string
}
const Header = ({ text, className }: HeaderProps) => {
    return <h2 className={"text-xl font-extrabold text-cgic-naranja-1 mb-2" + " " + className}>{text}</h2>
}
export { Header }