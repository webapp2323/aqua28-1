import React, {useEffect, useState} from "react";
import {SimpleModal} from "../SimpleModal/SimpleModal";
import "./Main.css";

export const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  const openModal = () => {
    setModalInfoOpen(true);
  };

  return (
      <div className="col-auto">
        <nav className="navbar">
          <div className="navbar-nav">
            <div className="nav-item">
              <img className="thumbnail" id="avatar" src=""/>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="#" onClick={openModal}>Add</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="#" id="deleteButton">Delete</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </div>
          </div>
          <span className="navbar-text">
    <div id="login">...</div>
  </span>
        </nav>


        <div className="col">
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
        </div>

        <SimpleModal
            isOpen={modalInfoIsOpen}
            onClose={() => setModalInfoOpen(false)}
        >
          <h2>Modal Info</h2>
          <div id="addModal" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg">
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
                        Quantity: <input type="text" id="quantity" onChange="calculatePrice()" placeholder="quantity"/>
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
                  <button type="button" className="btn btn-default" onClick={() => setModalInfoOpen(false)}>Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SimpleModal>
      </div>
  );
};

export default {Main};