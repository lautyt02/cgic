import { Paragraph, Form } from "../../../components"
const paragraphs = [
    { id: "quienes-somos", title: "¿Quienes Somos?", text: "hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub" },
    { id: "que-va-a-haber", title: "¿Qué va a haber?", text: "hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub" },
    { id: "cuando", title: "¿Cuando es?", text: "hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub" }
]
const elements = [{elType: "input", atributes:{ id: "nombre", label: "Nombre:", type: "text", name: "nombre", placeholder: "Ingrese su nombre" }},
    {elType: "input", atributes:{ id: "apellido", label: "Apellido:", type: "text", name: "apellido", placeholder: "Ingrese su apellido" }},
    {elType: "input", atributes:{ id: "nombre-institucion", label: "Institución de la que forma parte:", type: "text", name: "nombre-institucion", placeholder: "Nombre de la Institución" }},
    {elType: "input", atributes:{ id: "tel", label: "Teléfono:", type: "tel", name: "tel", placeholder: "Su número de teléfono" }},
    {elType: "input", atributes:{ id: "mail", label: "Mail:", type: "email", name: "mail", placeholder: "Su dirección de mail" }},
]
const buttons = []

const HubDeInovacion = () => {

    return <>
        <section>
            {paragraphs && paragraphs.map((paragraph) => {
                return <Paragraph id={paragraph.id} key={paragraph.id} title={paragraph.title} text={paragraph.text} />
            })}
            <Form elements={elements}>

            </Form>

        </section>
        <section>

        </section>
    </>
}
export { HubDeInovacion }