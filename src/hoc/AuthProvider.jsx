import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ token });
        }
    }, []);

    const signin = async (email, password, cb) => {
        try {
            const response = await fetch('http://water-backend-env.eba-iskuigs5.eu-north-1.elasticbeanstalk.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email, password })
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem('token', token);
                setUser({ token });
                cb();
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            console.error('Sign-in error:', error);
        }
    };


    const oauthSignin = async (token, cb) => {
        const url = 'http://water-backend-env.eba-iskuigs5.eu-north-1.elasticbeanstalk.com/api/auth/oauth2/success';
        console.log(`OAuth sign-in with URL: ${url} and token: ${token}`);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Google-Token': token
                }
            });
            console.log('OAuth sign-in response:', response);
            if (response.ok) {
                const data = await response.json();
                const jwtToken = data.token;
                console.log('OAuth sign-in successful, JWT token received:', jwtToken);
                localStorage.setItem('token', jwtToken);
                setUser({ token: jwtToken });
                cb();
            } else {
                console.error('OAuth sign-in failed, status:', response.status);
                throw new Error('OAuth login failed');
            }
        } catch (error) {
            console.error('OAuth login error:', error);
        }
    };


    const signout = (cb) => {
        console.log('Signing out...');
        localStorage.removeItem('token');
        setUser(null);
        cb();
    };

    const value = { user, signin, oauthSignin, signout };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};