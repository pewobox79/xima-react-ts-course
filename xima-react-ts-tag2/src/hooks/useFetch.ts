import { useEffect, useState } from 'react'

export function useFetch(url: string) {


    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    async function fetchData() {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            const json = await response.json()
            setData(json)

        } catch (err) {
            console.log("err", err)
            setError(err)
        } finally{
            setIsLoading(false)
        }

    }


    useEffect(() => {

        fetchData()


    }, [])



    return { data, isLoading, error }
}

