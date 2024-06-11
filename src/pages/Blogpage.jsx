
import {Link, useLoaderData, useSearchParams} from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';

const Blogpage = () => {
const  posts = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    const handleSubmit = (e)=> {
        e.preventDefault();

        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};
        if(query.length) params.post = query;
        if(isLatest) params.latest = true;
        setSearchParams(params);
    }




    return (
        <div>
            <h1>Our news</h1>

            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>

            <Link to="/posts/new" style={{margin:'1rem 0', displey:'inline-block'}}>Add new post</Link>
            {
                posts.filter(
                    post=>post.title.includes(postQuery) && post.id >=startsFrom
                ).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                                    <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>


    )
}
const blogLoader = async ()=>{
  // console.log( {request, params})

    const  res = await  fetch('https://jsonplaceholder.typicode.com/posts')

    return res.json()
}
export {Blogpage,blogLoader}
