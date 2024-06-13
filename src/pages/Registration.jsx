import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register } = useAuth();

    useEffect(() => {
        window.scrollTo({
            top: 450,
            behavior: 'smooth'
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { login, age, password, email, gender } = Object.fromEntries(formData);
        try {
            await register(login, age, password, email, gender);
            navigate('/login');
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
            <h1 style={{marginBottom: '0.1px'}}>Реєстрація оптових клієнтів компанії</h1>
            <h1 style={{marginTop: '0.5px'}}>Гармонія Аква Логістика</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="login"
                    type="text"
                    placeholder="Enter name"
                    required
                    className="form-control mt-3 font-size-increase"
                />
                <input
                    name="age"
                    type="number"
                    placeholder="Your age"
                    className="form-control mt-3 font-size-increase"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    required
                    className="form-control mt-3 font-size-increase"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="form-control mt-3 font-size-increase"
                />
                <div className="mt-3">
                    <input type="radio" id="gender-male" name="gender" value="male"/>
                    <label htmlFor="gender-male" className="font-size-increase">Male</label>
                    <input type="radio" id="gender-female" name="gender" value="female"/>
                    <label htmlFor="gender-female" className="font-size-increase">Female</label>
                </div>
                <textarea
                    rows="3"
                    className="form-control font-size-increase"
                    placeholder="Add comment here"
                ></textarea>
                <div className="mt-3 mb-3">
                    <button className="btn btn-secondary font-size-increase" type="reset">
                        Reset
                    </button>
                    <button className="btn btn-success font-size-increase" type="submit" style={{ color:"blue"}}>
                        Submit
                    </button>
                </div>
            </form>
            <button className="btn btn-primary font-size-increase" onClick={handleGoBack}>
                Повернутись назад
            </button>
        </div>
    );
};

export {Registration};