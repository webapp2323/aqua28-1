import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Loginpage1 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { j_login, j_password } = Object.fromEntries(formData);
        try {
            await login(j_login, j_password);
            const redirectPath = location.state?.from?.pathname || '/';
            navigate(redirectPath);
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
            <h1>Вхід оптових клієнтів до сайту компанії "Гармонія Аква Логістика" або перехід до реєстрації нових
                клієнтів</h1>
            <form onSubmit={handleSubmit}>
                Email:
                <br/>
                <input type="text" name="j_login"/>
                <br/>
                Password:
                <br/>
                <input type="password" name="j_password"/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <p>
                <a href="/registration">Register new user</a>

            </p>
            {location.search.includes('error') && <p>Wrong login or password!</p>}
            {location.search.includes('logout') && <p>Chao!</p>}
            <button className="btn btn-primary font-size-increase" onClick={handleGoBack}>
                Повернутись назад
            </button>

        </div>
    );
};

export {Loginpage1};