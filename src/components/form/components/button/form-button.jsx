const FormButton = ({formId, id, value, handleOnClick }) => {
    return <>
        <label htmlFor={formId}>
            <input className="" id={id} type="button" value={value} onClick={handleOnClick} />
        </label>

    </>
}
export { FormButton }