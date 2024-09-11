const HeaderImage=(props)=>{

    console.log("props",props)
    return <img 
    src={props.imageLink} 
    alt={props.alt}/>
}

export default HeaderImage