import React, { useState } from 'react'

function NewBlogForm({action}) {

    const [article, setArticle] = useState({
        title: "",
        body: ""
    })

    function handleChange(e: { target: { name: string, value: string } }) {

        setArticle({ ...article, [e.target.name]: e.target.value })
    }
    console.log("article", article)

    function handleSubmit(e){
        e.preventDefault()
        action(article)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input id="title" type="text" name="title" value={article.title} onChange={handleChange} /><br />
            <label htmlFor='body'>Body</label>
            <textarea id="body"name="body" rows={4} cols={20} onChange={handleChange} value={article.body} /><br/>
            <button type="submit">submit</button>
        </form>
    )
}

export default NewBlogForm