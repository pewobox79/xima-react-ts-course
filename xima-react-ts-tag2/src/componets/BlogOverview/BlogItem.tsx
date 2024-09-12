import { Link } from "react-router-dom"

function BlogItem({title, id}:{title:string, id:number}) {
  return (
    <Link to={`/blog/${id}`}><h2>{title}</h2></Link>
  )
}

export default BlogItem