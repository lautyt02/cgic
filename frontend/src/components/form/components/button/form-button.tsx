import type { TFormComponent } from "../../types"
type FormButtonProps =Omit<TFormComponent, "name"> & {
    value:string,
    handleOnClick:()=> void
}
const FormButton = ({id, value, handleOnClick }:FormButtonProps) => {
    return <>
        <label htmlFor={id}>
            <input className="" id={id} type="button" value={value} onClick={handleOnClick} />
        </label>

    </>
}
export { FormButton }