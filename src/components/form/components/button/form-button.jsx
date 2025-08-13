const FormButton = ({ id, value, handleOnClick }) => {
    return <>
        <label htmlFor={id}>
            {label}
            <input className="" id={id} type="button" value={value} onClick={handleOnClick} />
        </label>

    </>
}
export { FormButton }