import promoImg from "../img/product/vo-voter.jpeg";

const Cartpage = () => {
    return (
        <div>
            <div className='promo_content'>

                <div className='promo_text'>

                    <div className='promo_title'>
                        Компанія "Гармонія Аква Лоґістика"
                    </div>

                    <div className='promo_desc'>
                        вітає Вас з найкращими побажаннями у задоволенні ваших потреб
                        високоякісною та чистою питною водою
                    </div>


                    <a href="mailto:zahirolek@gmail.com?subject=Заявка клієнта на замовлення та доставку питної води від Гармонія Аква Лоґістика
            &body=Прошу доставити воду на адресу_______________________, дату_________, чвс____________.%0A%0AОбераю доставку за бронзовим рівнем програми лояльності (50л води зі знижкою 5%) .%0A%0AБуду вдячний за письмову відповідь або дзінок на мій номер телефону:_____________. %0A%0A Про програму лояльностіможна дізнатися на сайті https://www.harmonyaqualogistics.com.  %0A%0AЗ повагою,%0A[Ваше ім'я]"
                       className='promo_btn'>
                        Натисніть кнопку та замовте доставку питної води!
                    </a>


                </div>
                <div className='promo_img'>
                    <img src={promoImg} alt='promoImg'/>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export {
    Cartpage
}
