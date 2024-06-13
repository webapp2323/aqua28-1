
import React, {useEffect} from "react";
import sertiFoto from "../img/sertifikat.jpg";


const Sertif = () => {
    useEffect(() => {
        window.scrollTo({
            top: 400,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div>
            <h1>Надаємо сертифікати якості води</h1>
            <img
                src={sertiFoto}
                alt='sertificat'
                className='img-fluid product-image'
                style={{ width: '70%' }}
            />
        </div>
    );
};
export { Sertif };