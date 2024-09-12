
//type Colors = "red" | "yellow" | "blue"

/* type ButtonTypes ={
    style:{
        backgroundColor: Colors,
        color: "white" | "black",
        padding?: [number, number?, number?, number?], 
        margin?: number[]
    },
    action?: ()=>void
} */


type ButtonTypesWithCSSProperties = {
    style?: React.CSSProperties & {color: "white" | "black"}
    action?: ()=>void,
    text: string
}

export default function Button({style, action, text ="Save"}:ButtonTypesWithCSSProperties) {

    return <button
        style={style} 
        onClick={action}>
        {text}
    </button>
}