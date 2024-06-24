import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import googl from "../img/googl-fasebook.webp";
import facebook from "../img/googl-fasebook.webp";

const SignUp = () => {
    const navigate = useNavigate();
    const { oauthSignin } = useAuth();

    const handleGoogleSuccess = async (response) => {
        console.log('Google login success:', response);
        try {
            await oauthSignin(response.credential, () => {
                console.log('Navigating to /Main');
                navigate('/Main');
            });
        } catch (error) {
            console.error('OAuth error:', error);
        }
    };

    const handleGoogleError = (error) => {
        console.error('Google Login Error:', error);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-dark">
            <div className="container py-2 d-flex align-items-center">
                <div className="d-flex align-items-center mr-auto">
                    <div className="d-flex flex-column">
                        <h1 className="mb-3">Пройди авторизацію через GOOGLE</h1>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
                            {/*<button
                                className="social-icon social-icon-facebook"
                                onClick={handleFacebookLogin}
                            >
                                Авторизация через Facebook
                            </button>*/}
                        </div>
                        <Link to='/login1' className="mb-3">
                            <h4>або зайти до сайту залогінившись тут</h4>
                        </Link>
                        <button className="btn btn-primary font-size-increase" onClick={handleGoBack}>
                            Повернутись назад
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SignUp };
