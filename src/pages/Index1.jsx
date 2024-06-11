import React, {useEffect} from "react";

const Index1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h2>Оформіть заявку на доставку питної води та очікуйте повідомлення від менеджера компанії про
                    підтвердження заявки</h2>
            </div>
            <h4>Наша компанія пропонує гнучку систему розрахунків для доставки води,
                що враховує знижки вартості води згідно вибраної програми лояльності з фіксованою
                вартістю доставки у межах району Теремків-2 міста Києва.
                Ми дбаємо про зручність наших клієнтів та пропонуємо прозоре та чесне ціноутворення.
                Вартість доставки розраховується індивідуально у випадку доставки за межі вказаного району.</h4>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <img className="thumbnail" id="avatar" src=""/>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#addModal">Add</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="deleteButton">Delete</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Logout</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                <div id="login">...</div>
            </span>
                </div>
            </nav>

            <table id="data" className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Check</th>
                    <th scope="col">Date</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">TaskOwner</th>
                    <th scope="col">TaskStatus</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <nav aria-label="Page navigation">
                <ul id="pages" className="pagination"></ul>
            </nav>

            <div id="addModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Enter new task</h4>
                        </div>
                        <div className="modal-body">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        Delivery Date: <input type="datetime-local" id="deliveryDate"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Address: <input type="area" id="address" placeholder="address"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Phone number: <input type="text" id="phone" placeholder="phone"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Quantity: <input type="text" id="quantity" onChange="calculatePrice()"
                                                         placeholder="quantity"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Price: <input type="text" id="price" disabled></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span id="dateSpan"></span></td>
                                </tr>
                                <tr>
                                    <td><span id="addressSpan"></span></td>
                                </tr>
                                <tr>
                                    <td><span id="quantitySpan"></span></td>
                                </tr>
                                <tr>
                                    <td><span id="phoneSpan"></span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="button" id="submitButton" value="Add"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span id="messageSpan"></span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export {Index1};