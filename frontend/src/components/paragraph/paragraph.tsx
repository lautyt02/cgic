import type { Tparagraph } from "../../data/data-types"
import { Header } from "../header/header"

const Paragraph = ({ title, text, id }: Tparagraph) => {
    return <div id={id} className="mb-5">
        <Header text={title} />
        <p className="text-justify text-balance align-middle">{text}</p>
    </div>
}
export { Paragraph }