import { Paragraph, Form } from "../../../components"
const paragraphs = [
    { id: "quienes-somos", title: "¿Quienes Somos?", text: "hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub" },
    { id: "que-va-a-haber", title: "¿Qué va a haber?", text: "hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub" },
    { id: "cuando", title: "¿Cuando es?", text: "hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub" }
]
const inputs = [{ id: "nombre", label: "Nombre:", type: "text", name: "nombre", placeholder: "Ingrese su nombre" },
    { id: "apellido", label: "Apellido:", type: "text", name: "apellido", placeholder: "Ingrese su apellido" },
    { id: "nombre-institucion", label: "Institución de la que forma parte:", type: "text", name: "nombre-institucion", placeholder: "Ingrese el nombre de la Institución" },
    { id: "tel", label: "Teléfono:", type: "tel", name: "tel", placeholder: "Ingrese su numero de teléfono" },
    { id: "mail", label: "Mail:", type: "email", name: "mail", placeholder: "Ingrese su dirección de mail" },
]
const buttons = []

const HubDeInovacion = () => {

    return <>
        <section>
            {paragraphs && paragraphs.map((paragraph) => {
                return <Paragraph id={paragraph.id} key={paragraph.id} title={paragraph.title} text={paragraph.text} />
            })}
            <Form inputs={inputs}>

            </Form>

        </section>
        <section>

        </section>
    </>
}
export { HubDeInovacion }