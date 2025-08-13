// component for inputs of type: Text, number, email, password and url
const validTypes = ["text", "number", "email", "password", "url"]

const Input = ({ id, label, type, name, value, placeholder, autocomplete }) => {
    autocomplete = type == "pasword" ? false : autocomplete
    return <>
        <label htmlFor={id}>
            {label}
            <input className="" id={id} type={type} name={name} value={value} placeholder={placeholder} autocomplete={autocomplete} />
        </label>

    </>
}
export { Input }