import type { TFormComponent } from "../../types"
const TextArea = ({ name, id, label }:TFormComponent) => {
    return <label className="flex-1" htmlFor={id}>
        <h3>{label}</h3>
        <textarea className="border-cgic-azul border rounded-sm min-w-60 sm:min-w-100 w-full " name={name} id={id}></textarea>
    </label>
}
export { TextArea }