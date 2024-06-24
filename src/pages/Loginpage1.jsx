import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Loginpage1 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { signin } = useAuth();

    useEffect(() => {
        window.scrollTo({
            top: 200,
            behavior: 'smooth'
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { j_login, j_password } = Object.fromEntries(formData);
        try {
            await signin(j_login, j_password, () => {
                const redirectPath = location.state?.from?.pathname || '/';
                navigate(redirectPath);
            });
        } catch (error) {
            console.error(error);
            // Display error message to the user
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>Вхід клієнтів компанії "Гармонія Аква Логістика" або
                <a href="/registration"> реєстрація нових оптових клієнтів </a>
            </h1>
            <form onSubmit={handleSubmit} style={{ fontSize: '1.3em' }}>
                <table style={{ width: '100%' }}>
                    <tbody>
                    <tr>
                        <td>Email:</td>
                        <td>
                            <input
                                type="text"
                                name="j_login"
                                style={{ fontSize: '1em' }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input
                                type="password"
                                name="j_password"
                                style={{ fontSize: '1em' }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'left' }}>
                            <button type="submit" style={{ fontSize: '1em', color: "blue" }}>
                                Submit
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
            {location.search.includes('error') && <p>Wrong login or password!</p>}
            {location.search.includes('logout') && <p>Chao!</p>}
            <button className="btn btn-primary font-size-increase" onClick={handleGoBack}>
                Повернутись назад
            </button>
        </div>
    );
};

export { Loginpage1 };
