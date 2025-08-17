import { FormButton, Input, TextArea, Radius, Select } from "./components"
const Form = ({ title, action, method, inputs, buttons }) => {
    return <>
        <h4>{title}</h4>     <form action={action} method={method} className="">
            {inputs && inputs.map(input => {
                return <Input id={input.id} label={input.label} type={input.type} name={input.name || ""} value={input.value || ""} placeholder={input.placeholder || ""} autocomplete={input.autocomplete || false} />
            })}
            {buttons && buttons.map(button => {
                return <FormButton id={button.id} value={button.value} handleOnClick={button.onClick} />
            })}
        </form>
    </>
}
export { Form }