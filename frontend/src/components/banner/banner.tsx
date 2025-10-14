import { Header } from "../header/header"
import type { Tlogos } from "../../data/data-types"
type BannerProps = {
    title:string,
    id:string,
    images:Tlogos
}
const Banner = ({ title, id, images }:BannerProps) => {
    return <div id={id} className="">
        <Header className="ml-[10dvw] md:ml-0" text={title}></Header>
        <div className="bg-cgic-gris-oscuro p-5 flex gap-5 w-full flex-wrap shadow-xs shadow-cgic-azul justify-evenly content-evenly justify-items-center items-center md:rounded-3xl">
            {images && images.map((image, i) => {
                return <a key={image.src + i} href={image.link} className={"min-w-35 max-w-70 "} target="blank">
                    <img className="" src={image.src} alt={image.alt} />
                </a>

            })}
        </div>


    </div>
}
export { Banner }