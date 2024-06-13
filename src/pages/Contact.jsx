import { Outlet, Link } from 'react-router-dom';
import {useEffect} from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({
            top: 365,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div>
            <h1>Наші контакти</h1>
            <ul>
                <li>Компанія "Гармонія Аква Лоґістика".</li>
                <li>Графік роботи: 10.00-18.00 без вихідних.</li>
                <li>Сайт компанії "Гармонія Аква Лоґістика": <b>https://www.harmonyaqualogistics.com.</b></li>
                <li>Адреса: м. Київ, вул. Степана Рудницького, 3/7 офіс 479.</li>
                <li>Відділ обслуговування клієнтів: <b>тел. 0633563442.</b></li>
                <a href="mailto:zahirolek@gmail.com?subject=Звернення клієнта після ознайомлення з сайтом компанії Гармонія Аква Лоґістика
                            &body=Дякую за наданий сервіс!%0A%0AПісля відвідування сайту https://www.harmonyaqualogistics.com маю деякі питання (пропозиції).%0A%0AБуду вдячний за письмову відповідь або дзінок на мій номер телефону:_____________.%0A%0AЗ повагою,%0A[Ваше ім'я]">
                    Написати листа в компанію "Гармонія Аква Лоґістика"</a>

                <li>Месенжер відділу обслуговування клієнтів: <a href="https://t.me/oleksandr35z" target="_blank"
                                                                 rel="noopener noreferrer">
                    Перейти в Telegram та звязатись з відділом обслуговування клієнтів компанії "Гармонія Аква Лоґістика".
                </a></li>

            </ul>

            <h4>Геолокація точки видачі питної води</h4>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.881225358665!2d30.463616384672356!3d50.38962081631271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c91ffb4254fb%3A0x50ac2ba89cb031dd!2z0LLRg9C70LjRhtGPINCh0YLQtdC_0LDQvdCwINCg0YPQtNC90LjRhtGM0LrQvtCz0L4sIDMvNywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1708944607487!5m2!1suk!2sua"
                width="1250"
                height="450"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>




        </div>
    )
}

export {Contact}