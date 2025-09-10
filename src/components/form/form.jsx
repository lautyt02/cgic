import { FormButton, Input, TextArea, Radius, Select } from "./components"
import { Header } from "../header/header"
const Form = ({ title, action, method, elements, children, className, headerClassName }) => {
    const inputGenerator = element => {
        switch (element.elType) {
            case "input":
                return <Input id={element.atributes.id} label={element.atributes.label} type={element.atributes.type} name={element.atributes.name || ""} value={element.atributes.value || ""} placeholder={element.atributes.placeholder || ""} autocomplete={element.atributes.autocomplete || false} />
            case "button":
                return <FormButton id={element.atributes.id} value={element.atributes.value} handleOnClick={element.atributes.onClick} />
            case "textarea":
                return <TextArea  {...element.atributes} />
            case "radius":
                return <Radius  {...element.atributes} />
            case "select":
                return <Select  {...element.atributes} />
            default:
                return <h7>Not a valid element type</h7>
        }

    }
    return <div className="">
        <Header text={title} className={headerClassName}/>
        <form action={action} method={method} className={"bg-cgic-gris-claro p-5 shadow-xs shadow-cgic-azul max-w-205"+" "+className}>
            {children}
            {elements && elements.map((element, i) => {
                return <div key={element.atributes.id + i}>{inputGenerator(element)} </div>
            })}
        </form>
    </div>
}
export { Form }