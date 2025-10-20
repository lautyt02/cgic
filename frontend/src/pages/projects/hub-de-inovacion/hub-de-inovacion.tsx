import { Paragraph, Banner } from "../../../components"
import { HubForm } from "./components"
import { paragraphs,logos } from "./data"

const HubDeInovacion = () => {
    const paddingX = "px-[10dvw]"
    return <>
        <main >
            <section className={paddingX}>
                {paragraphs && paragraphs.map((paragraph) => {
                    return <Paragraph id={paragraph.id} key={paragraph.id} title={paragraph.title} text={paragraph.text} />
                })}

            </section>
            <section className={"mb-5 " + "md:px-[10dvw]"}>
                <HubForm />
            </section>
            <section className={`md:${paddingX}`}>
                <Banner title="Nos Acompañan" id="sponsors" images={logos} />
            </section>

        </main>
    </>
}
export { HubDeInovacion }