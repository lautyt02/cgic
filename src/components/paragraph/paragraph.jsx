import { Header } from "../header/header"
const Paragraph = ({ title, text }) => {

    return <div className="mb-5">
        <Header text={title}/>
        <p className="">{text}</p>
    </div>
}
export {Paragraph}