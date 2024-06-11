import {Link, useLoaderData, useNavigate} from 'react-router-dom'


const Singlepage = () => {
    const {post, id} = useLoaderData()
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});



    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>

                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </div>
    )
}

const postLoader = async ({params}) =>{
    const id = params.id;

    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await  res.json()
    return {post,id}
}

export {Singlepage,postLoader}
