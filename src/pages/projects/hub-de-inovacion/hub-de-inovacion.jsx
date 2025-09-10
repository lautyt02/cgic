import { useEffect, useState } from "react"
import { Paragraph, Banner } from "../../../components"
import { HubForm } from "./components"
import { getLogos, getHubData } from "../../../servicies/content"

const HubDeInovacion = () => {
    const [logos, setLogos] = useState([])
    const [paragraphs, setParagraphs] = useState([])
    useEffect(() => {
        getHubData().then((data) => {
            setParagraphs(data)
        })
        getLogos().then((data) => {
            setLogos(data)
        })
    }, [])
    const paddingX="px-[10dvw]"
    return <>
        <main >
            <section className={paddingX}>
                {paragraphs && paragraphs.map((paragraph) => {
                    return <Paragraph id={paragraph.id} key={paragraph.id} title={paragraph.title} text={paragraph.text} />
                })}
                
            </section>
            <section className={"mb-5 "+"md:"+paddingX}>
                <HubForm />
            </section>
            <section className={"md:"+paddingX}>
                <Banner title="Nos Acompañan" id="sponsors" images={logos} />
            </section>
            
        </main>
    </>
}
export { HubDeInovacion }