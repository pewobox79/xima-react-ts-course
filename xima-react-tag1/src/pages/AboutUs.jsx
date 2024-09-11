import HeaderImage from "../components/globals/HeaderImage"

import styles from "../styles/AboutUs.module.css"

const AboutUs = () => {

    console.log("styles", styles)
    return <>
        <HeaderImage
            imageLink="https://www.shutterstock.com/image-vector/beautiful-sundown-beach-tree-silhouette-260nw-1642679104.jpg"
            alt="sun down image" 
            />
        <h2 className={styles.aboutUsTitle}>About us</h2>
        <p className={`${styles.aboutUsTitle}`}>hallo das bin ich</p>
    </>
}

export default AboutUs