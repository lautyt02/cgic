import { Header } from "../header/header"

type FormProps = {
    id: string,
    title: string,
    handleOnSubmit: () => void,
    method: string,
    children: React.ReactNode,
    className: string,
    headerClassName: string,
    submitValue:string
}

const Form = ({ id, title, handleOnSubmit, method, children, className, headerClassName, submitValue}: FormProps) => {

    return <div id={id} className="">
        <Header text={title} className={headerClassName} />
        <form onSubmit={handleOnSubmit} method={method} className={"bg-cgic-gris-claro py-5 px-[10dvw] md:px-5 shadow-xs shadow-cgic-azul w-full" + " " + className}>
            {children}
             <label htmlFor={id}>
            <input className="" id={"submit-"+id} type="submit" value={submitValue} />
        </label>
        </form>
    </div>
}
export { Form }