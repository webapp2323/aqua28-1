import React, {useEffect} from "react";

const Program1 = () => {
    useEffect(() => {
        window.scrollTo({
            top: 355,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div>
            <ul>
            <h2>Вигідна цінова політика через програму лояльності "Вода на Рівні":</h2>
        </ul>
            <div style={{ marginLeft: '20px' }}>
                <table>
                    <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>Рівень</th>
                        <th style={{textAlign: 'center'}}>Вимога щодо замовлення кількості води на місяць</th>
                        <th style={{textAlign: 'center'}}>Переваги</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Бронзовий</td>
                        <td style={{textAlign: 'center'}}>50 літрів води на місяць</td>
                        <td >5% знижка на кожне замовлення наступного місяця</td>
                    </tr>
                    <tr>
                        <td>Срібний</td>
                        <td style={{textAlign: 'center'}}>100 літрів води на місяць</td>
                        <td>
                            10% знижка на кожне замовлення наступного місяця<br/>
                            Безкоштовна доставка для замовлень від 100 літрів води
                        </td>
                    </tr>
                    <tr>
                        <td>Золотий</td>
                        <td style={{textAlign: 'center'}}>150 літрів води на місяць</td>
                        <td>
                            15% знижка на кожне замовлення наступного місяця<br/>
                            Безкоштовна доставка для всіх замовлень<br/>
                            Ексклюзивні пропозиції та акції для продукції
                        </td>
                    </tr>
                    <tr>
                        <td>Платиновий</td>
                        <td style={{textAlign: 'center'}}>200 літрів води на місяць</td>
                        <td>
                            20% знижка на кожне замовлення наступного місяця<br/>
                            Безкоштовна доставка для всіх замовлень<br/>
                            Ексклюзивні пропозиції та персональний менеджер для вирішення всіх питань
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h3>
                <p className="loyalty-info">
                    <ul>
                        Ця програма призначена для високоцінних клієнтів, які обирають "Гармонію Аква
                        Логістика" для своїх потреб у водопостачанні.
                    </ul>
                    <ul>
                        Покращуйте свій досвід покупки та отримуйте персоналізоване обслуговування з нашою
                        програмою лояльності. Дякуємо за ваш вибір!
                    </ul>
                </p>
            </h3>
        </div>
    );
};

export { Program1 };