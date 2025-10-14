import type { TOptions } from "../types"

const Radius = ({label, name, id, options }: TOptions) => {
    return <fieldset id={id}>
        <input type="radio" name={name} id="" />
    </fieldset>
}
export { Radius }