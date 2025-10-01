import { Header } from "../header/header"
const Banner = ({ title, id, images }) => {
    console.log("Banner")
    console.log(images)
    return <div id="sponsors" className="">
        <Header className="ml-[10dvw] md:ml-0" text={title}></Header>
        <div className="bg-gray-300 p-5 flex gap-5 w-full flex-wrap shadow-xs shadow-cgic-azul justify-evenly content-evenly justify-items-center items-center md:rounded-3xl">
            {images && images.map((image, i) => {
                console.log(image.src)
                return <a key={image.src + i} href={image.link} className="min-w-50 max-w-100" target="blank">
                    <img className="" src={image.src} alt={image.alt} />
                </a>

            })}
        </div>


    </div>
}
export { Banner }