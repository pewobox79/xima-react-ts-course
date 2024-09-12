
type Colors = "red" | "yellow" | "blue"

type ButtonTypes ={
    style:{
        backgroundColor: Colors,
        color: "white" | "black",
        padding?: [number, number?, number?, number?], 
        margin?: number[]
    },
}


type ButtonTypesWithCSSProperties = {
    style: React.CSSProperties & {color: Colors}
}

export default function Button({style}:ButtonTypesWithCSSProperties) {

    return <button
        style={style}>
        Click mich
    </button>
}