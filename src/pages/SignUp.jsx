import React from 'react';
import googl from "../img/googl-fasebook.webp";
import facebook from "../img/googl-fasebook.webp";
import { Link, useNavigate } from "react-router-dom";
import {GoogleLogin} from "@react-oauth/google";

const SignUp = () => {
    const navigate = useNavigate();

    const responseMessage = (response) => {
        console.log(response);
        navigate('/Main');
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const handleGoogleLogin = () => {
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />;
        navigate('/Index1');
    };

    const handleFacebookLogin = () => {
    //     // Логика авторизации через Facebook
    //     // После успешной авторизации, переходим на страницу Main.jsx
    //     navigate('/Main');
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
                            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} width={200} />
                            {/*<button*/}
                            {/*    className="social-icon social-icon-facebook"*/}
                            {/*    onClick={handleFacebookLogin}*/}
                            {/*>*/}
                            {/*    /!*Авторизация через Facebook*!/*/}
                            {/*</button>*/}
                        </div>
                        <Link to='/login1' className="mb-3">
                            <h4>або зареєструйся на сайті компанії тут</h4>
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