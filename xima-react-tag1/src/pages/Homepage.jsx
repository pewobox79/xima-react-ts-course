import HeaderImage from "../components/globals/HeaderImage"

const Homepage = () => {

    const myStyle =
    {
        color: "green",
        fontSize: "4.5rem"
    }

    return (
        <>
            <HeaderImage
                imageLink="https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg="
                alt="bmw car" />

            <h1 className="headertext" style={myStyle}>Homepage</h1>
        </>
    )
}

export default Homepage