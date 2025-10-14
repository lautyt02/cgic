import type { TOptions } from "../types"
const Select = ({ label, name, id, options }: TOptions) => {
    return <label className="flex-1" htmlFor={id}>
        <h3>{label}</h3>
        <select className="border-cgic-azul border rounded-sm min-w-60 w-full " name={name} id={id}>
            <option value="">Seleccione una opcion</option>
            {options && options.map((option) => {
                return <option value={option.value}>{option.text}</option>
            })}
        </select>
    </label>



}
export { Select }