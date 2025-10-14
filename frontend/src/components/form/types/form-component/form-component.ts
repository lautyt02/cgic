export type TFormComponent = {
    id: string,
    label: string,
    name: string,
}
export type TOptions = TFormComponent & {
    options: {
        value: string,
        text: string
    }[]
}