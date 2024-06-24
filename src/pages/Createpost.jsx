import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const Createpost = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const content = form.content.value;

        const url = 'http://water-backend-env.eba-iskuigs5.eu-north-1.elasticbeanstalk.com/api/posts';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ title, content })
            });
            if (response.ok) {
                navigate('/posts');
            } else {
                throw new Error('Failed to create post');
            }
        } catch (error) {
            console.error('Create post error', error);
        }
    };


    return (
        <div>
            <h1>Create a post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title: <input name="title" type="text" />
                </label>
                <br />
                <label>
                    Content: <textarea name="content"></textarea>
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export { Createpost };