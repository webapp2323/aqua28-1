import { Outlet, Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>Про нас</h2>

            <h4>Історія компанії: </h4>
            <p>Дев'ять років плідної праці – це подорож нашої компанії, в теплому серці якої
            пульсує найкраще. Заснована із захопленням та вірою в зміни, наша історія насичена трудовими випробуваннями
            та перемогами. Протягом цього періоду ми кували справжній діамант – Гармонія Аква Логістика. З кожним роком
            ми вдосконалюємо наші технології, розширюємо асортимент та привносимо в світ питної води щось особливе. Наша
            історія – це розповідь про відданість, інновації та безмежне прагнення до якості. Приєднуйтеся до нас у
            подальшій подорожі, де ми продовжуємо будувати майбутнє, крапля за краплею.</p>


            <h4>Наша місія</h4> <p> Місія компанії "Гармонія Аква Логістика" полягає в забезпеченні споживачів
            високоякісною та чистою питною водою. Ми прагнемо створювати інноваційні рішення для доступу до найкращих
            водних ресурсів, підтримуючи здоров'я та добробут наших клієнтів. Наша місія - це допомагати людям досягати
            гармонії та забезпечувати їх потреби в чистій воді, створюючи екологічно чисте та ефективне середовище для
            усіх.</p>

            <h4>Наші цінності:</h4>
            <p>Ми маємо глибокі переконання та принципи, які визначають культуру компанії "Гармонія Аква Логістика".
                Наша діяльність грунтується на таких цінностях:

                <li>Якість: Ми завжди прагнемо до найвищого стандарту якості у всіх аспектах нашої роботи. Вода, яку ми
                    надаємо, повинна бути чистою, безпечною та відповідати всім нормам.</li>

                <li>Відповідальність: Ми несемо відповідальність за вплив наших дій на навколишнє середовище та
                    громадськість. Розвиваючи бізнес, ми дбаємо про сталість та екологічні аспекти.
                </li>

                <li>Інновації: Ми завжди вдосконалюємося та впроваджуємо нові технології для того, щоб надавати клієнтам
                    найсучасніші та найефективніші рішення.
                </li>

                <li>Співпраця: Віримо в силу співпраці, взаєморозуміння та взаємовигідного партнерства як ключових
                    компонентів успіху. Тільки разом ми можемо досягти більших висот.
                </li>

                <li> Клієнтська орієнтованість: Наша діяльність зосереджена на задоволенні потреб наших клієнтів. Ми
                    слухаємо їхні вподобання та завжди прагнемо надавати сервіс найвищого рівня.
                </li>

                Ці цінності є фундаментом, на якому ґрунтується розвиток та успіх компанії "Гармонія Аква Логістика".
            </p>

            <h4>Команда:</h4>
            <p>Група висококваліфікованих та відданих професіоналів, які діляться спільною метою
            створення найкращих умов для доступу до чистої питної води. Вони об'єднують зусилля, долаючи виклики та
            вдосконалюючи процеси, щоб забезпечити клієнтам найвищу якість та сервіс. Кожен член команди пронизаний
            цінностями компанії, такими як якість, відповідальність, інновації та співпраця, що визначає культуру та
            успіх "Гармонії Аква Логістика".</p>


            <Outlet/>



        </div>
    )
}

export {About}