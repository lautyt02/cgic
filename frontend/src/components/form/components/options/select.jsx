const Select = ({label, name, id, options})=>{
    return <label htmlFor={id}>
        <h3>{label}</h3>
        <select className="border-cgic-azul border rounded-sm min-w-60 max-w-150 " name={name} id={id}>
        <option value="">Seleccione una opcion</option>
        {options&&options.map((option)=>{
            return <option value={option.value}>{option.text}</option>
        })}
    </select>
    </label>
    
    
}
export {Select}