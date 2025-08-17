import { FormButton, Input, TextArea, Radius, Select } from "./components"
const Form = ({ title, action, method, elements }) => {
    const inputGenerator = element => {
        switch (element.elType) {
            case "input":
                return  <Input id={element.atributes.id} label={element.atributes.label} type={element.atributes.type} name={element.atributes.name || ""} value={element.atributes.value || ""} placeholder={element.atributes.placeholder || ""} autocomplete={element.atributes.autocomplete || false} />
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
    return <>
        <h4>{title}</h4>
        <form action={action} method={method} className="">
            {elements.map((element,i) => {
                return <div key={element.atributes.id + i}>{inputGenerator(element)} </div>
            })}
        </form>
    </>
}
export { Form }

// {inputs && inputs.map(input => {
//                 return <Input id={input.id} label={input.label} type={input.type} name={input.name || ""} value={input.value || ""} placeholder={input.placeholder || ""} autocomplete={input.autocomplete || false} />
//             })}
//             {buttons && buttons.map(button => {
//                 return <FormButton id={button.id} value={button.value} handleOnClick={button.onClick} />
//             })}