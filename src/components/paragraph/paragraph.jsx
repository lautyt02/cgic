import { Header } from "../header/header"
const Paragraph = ({ title, text, id }) => {

    return <div id={id}className="mb-5">
        <Header  text={title}/>
        <p className="">{text}</p>
    </div>
}
export {Paragraph}