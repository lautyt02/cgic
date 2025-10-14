import { Form } from "../../../../components"
import { Input, TextArea, Select } from "../../../../components/form/components"

// const elements = [{ elType: "input", atributes: { id: "nombre", label: "Nombre:", type: "text", name: "nombre", placeholder: "Ingrese su nombre" } },
// { elType: "input", atributes: { id: "apellido", label: "Apellido:", type: "text", name: "apellido", placeholder: "Ingrese su apellido" } },
// { elType: "input", atributes: { id: "nombre-institucion", label: "Institución de la que forma parte:", type: "text", name: "nombre-institucion", placeholder: "Nombre de la Institución" } },
// { elType: "input", atributes: { id: "tel", label: "Teléfono:", type: "tel", name: "tel", placeholder: "Su número de teléfono" } },
// { elType: "input", atributes: { id: "mail", label: "Mail:", type: "email", name: "mail", placeholder: "Su dirección de mail" } },
// ]
const options = [{ value: "publico", text: "Sector Público" }, { value: "privado", text: "Sector Privado" }, { value: "organizacion-social", text: "Organización Social" },
{ value: "institucion-educativa", text: "Institucion Educativa" }, { value: "investigacion", text: "Investigación" },
]
const HubForm = () => {
    const handleOnSubmit = () => {

    }
    const flexRowClases = "flex justify-between md:justify-start flex-wrap align-items-center gap-10 mb-5 w-full"
    return <Form title="Quiero Saber Más" className="md:rounded-3xl" headerClassName="ml-[10dvw] md:ml-0" id="hub-contact-form" handleOnSubmit={handleOnSubmit} method="POST" submitValue="Enviar">
        <div className={flexRowClases}>
            <Input id="nombre" label="Nombre:" type="text" name="nombre" placeholder="Ingrese su nombre" autocomplete="true" />
            <Input id="apellido" label="Apellido:" type="text" name="apellido" placeholder="Ingrese su apellido" autocomplete="true" />
        </div>
        <div className={flexRowClases}>
            <Input id="tel" label="Teléfono:" type="tel" name="tel" placeholder="Su número de Teléfono" autocomplete="true" />
            <Input id="mail" label="Mail:" type="email" name="mail" placeholder="Su dirección de mail" autocomplete="true" />
        </div>
        <div className={flexRowClases}>
            <Select id="tipo-organizacion" name="" label="Tipo de Organización:" options={options} />
            <Input id="nombre-institucion" label="Institución a la que pertenece:" type="text" name="nombre-institucion" placeholder="Nombre de la Institución" autocomplete="false" />
            <Input id="rol" label="Rol que Ocupa:" type="text" name="rol" placeholder="Su Rol en la Institución" autocomplete="false" />
        </div>
        <div className={flexRowClases}>
            <TextArea id="mensaje" label="Dejá tu Consulta" name="mensaje" />
        </div>



    </Form>

}
export { HubForm }