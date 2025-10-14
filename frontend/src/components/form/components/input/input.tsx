import type { TFormComponent } from "../../types"

// component for inputs of type: Text, number, email, password and url
// const validTypes = ["text", "number", "email", "password", "url"]

type InputProps = TFormComponent & {
    type: "text" | "number" | "email" | "password" | "url" | "tel"
    autocomplete: "true" | "false"
    initValue?: string
    placeholder?: string
}
const Input = ({ id, label, type, name, initValue, placeholder, autocomplete }: InputProps) => {
    autocomplete = type == "password" ? "false" : autocomplete

    return <div className="flex-1">
        <label htmlFor={id}>
            <h3>{label}</h3>
            <input className="border-cgic-azul border rounded-sm min-w-60 w-full" id={id} type={type} name={name} value={initValue} placeholder={placeholder} autoComplete={autocomplete} />
        </label>
    </div>

}
export { Input }