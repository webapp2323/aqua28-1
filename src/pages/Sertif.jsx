
import React from "react";
import sertiFoto from "../img/sertifikat.jpg";


const Sertif = () => {
    return (
        <div>
            <h4>Надаємо сертифікати якості води</h4>
            <img src={sertiFoto} alt='sertificat' className='img-fluid product-image'/>
        </div>
    );
}
export {Sertif}