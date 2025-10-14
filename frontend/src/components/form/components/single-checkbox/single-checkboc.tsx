const SingleCheckBox = ({id,text, value, name})=>{
    return <>
    <label htmlFor={id}>
        {text}
        <input type="checkbox" value={value} name={name}/>
    </label>
    </>
}
export {SingleCheckBox}