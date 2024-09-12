import { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import NewBlogForm from './NewBlogForm';

function BlogOverview() {
    const [posts, setPosts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json)
                setIsLoading(false)
            });

    }, [])


    

    function addNewArticle(data:{title: string, body: string}) {
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("response",json)
                setPosts([...posts, json])
            })


    }

    const PostList = posts.reverse()
    .map((post: { id: number, title: string }) => {
        return <BlogItem key={post.id} title={post.title} id={post.id} />

    })
    return (
        <div><h3>BlogOverview</h3>
            <NewBlogForm action={addNewArticle} />
            {isLoading ? <div>loading</div> : PostList}</div>
    )
}

export default BlogOverview