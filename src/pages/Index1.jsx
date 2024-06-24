import { useEffect, useState } from "react";

const Index1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [deliveryDate, setDeliveryDate] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [messageSpan, setMessageSpan] = useState('');

    const calculatePrice = () => {
        setPrice(quantity * 10); // Assuming a fixed price per unit
    };

    const handleSubmit = () => {
        // Perform any necessary data validation and submit the form
        setMessageSpan('Task added successfully!');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <img className="thumbnail" id="avatar" src="" />
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#addModal">
                                Add
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="deleteButton">
                                Delete
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">
                                Logout
                            </a>
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
                <tbody>{/* Render table data here */}</tbody>
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
                                        Delivery Date: <input type="datetime-local" id="deliveryDate" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Address: <input type="area" id="address" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Phone number: <input type="text" id="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Quantity: <input type="text" id="quantity" placeholder="quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value); calculatePrice(); }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Price: <input type="text" id="price" disabled value={price} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span id="dateSpan">{deliveryDate}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span id="addressSpan">{address}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span id="quantitySpan">{quantity}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span id="phoneSpan">{phone}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="button" id="submitButton" value="Add" onClick={handleSubmit} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span id="messageSpan">{messageSpan}</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Index1 };
