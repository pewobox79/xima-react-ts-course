import { useEffect } from "react"

function AboutUs() {

//const [number, setNumber] = useState(0)

  useEffect(() => {

    console.log("Effect runs")
    /* const interval = setInterval(()=>{

      setNumber(prev => prev+1)
    },1000) 

    return ()=>{
      console.log("cleanup")
      clearInterval(interval)
    } */

  }, [])



  return (
    <div>
      <h1>UseEffect Exercise </h1>
    counter: [number]afdsdaffdaad
    afasdfasfdasfd
    
    </div>
  )
}

export default AboutUs