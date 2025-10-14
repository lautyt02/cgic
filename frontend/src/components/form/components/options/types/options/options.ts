import type { TFormComponent } from "../../../../types";

export type TOptions = TFormComponent &{
    options:{
        value:string,
        text:string
    }[]
}