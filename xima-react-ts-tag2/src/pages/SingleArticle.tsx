import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function SingleArticle() { 

    const navigate = useNavigate();
    const {id} = useParams()
    const [article, setArticle] = useState({body: "", title: "", id: "", userId:""})


    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
        .then(json => setArticle(json))

    }, [])

  return (
    <div><h1>{article.title}</h1>
    <p>{article.body}</p>
    <button onClick={()=>navigate(-1)}>back to articles</button>
    </div>
  )
}

export default SingleArticle