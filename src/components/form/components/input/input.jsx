import { useState } from "react"

// component for inputs of type: Text, number, email, password and url
const validTypes = ["text", "number", "email", "password", "url"]

const Input = ({ id, label, type, name, propValue, placeholder, autocomplete }) => {
    const [value,setValue]=useState(propValue)
    autocomplete = type == "pasword" ? "false" : autocomplete
    const handleChange = (newValue)=>{
        setValue(newValue)
    }
    return <>
        <label htmlFor={id}>
            <h3>{label}</h3>
            <input className="border-cgic-azul border rounded-sm min-w-60 max-w-150 " id={id} type={type} name={name} value={value} placeholder={placeholder} autoComplete={autocomplete||"false"}/>
        </label>

    </>
}
export { Input }