import { Paragraph, Form } from "../../../components"
const paragraphs = [
    {id:"quienes-somos" ,title:"¿Quienes Somos?", text:"hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub"},
    {id:"que-va-a-haber" ,title:"¿Qué va a haber?", text:"hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub"},
    {id:"cuando" ,title:"¿Cuando es?", text:"hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub hbdhbshbsd dshbshdbbhdsbhsd sdnsdjnjdsjnds kmsdndisbfub"}
]
const HubDeInovacion = () => {

    return <>
        <section>
            {paragraphs && paragraphs.map((paragraph) => {
                return <Paragraph id={paragraph.id} key={paragraph.id} title={paragraph.title} text={paragraph.text} />
            })}
        <Form></Form>

        </section>
        <section>

        </section>
    </>
}
export { HubDeInovacion }