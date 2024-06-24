import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();
    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        await signin(email, password, () => navigate(fromPage, { replace: true }));
    };

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email: <input name="email" type="email" />
                </label>
                <br />
                <label>
                    Password: <input name="password" type="password" />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export { LoginPage };