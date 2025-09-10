import { Header } from "../header/header"
const Paragraph = ({ title, text, id }) => {

    return <div id={id}className="mb-5">
        <Header  text={title}/>
        <p className="text-justify text-balance align-middle">{text}</p>
    </div>
}
export {Paragraph}