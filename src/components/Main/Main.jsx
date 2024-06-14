import React, {useEffect, useState} from "react";
import {SimpleModal} from "../SimpleModal/SimpleModal";
import "./Main.css";
import {useNavigate} from "react-router-dom";

export const Main = () => {
  useEffect(() => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth'
    });
  }, []);

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  const openModal = () => {
    setModalInfoOpen(true);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
      <div className="col-auto ">
        <h1>Замов доставку питної води натиснувши <add style={{color: 'grey'}}>Add</add></h1>
        <nav className="navbar">

        <div className="navbar-nav">

            <div className="nav-item">
              <img className="thumbnail" id="avatar" src=""/>
            </div>

            <div className="nav-item">
              <a className="nav-link" href="/main">Таблиця замовлень</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="#" onClick={openModal}>
                <add style={{color: 'grey', fontWeight: 'bold'}}>Add</add>
              </a>
            </div>
          <div className="nav-item">
          <a className="nav-link" href="#" id="deleteButton">Видалити виділене замовлення</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="/program1">Діючі знижки</a>
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
              <th scope="col">Виділити замовлення</th>
              <th scope="col">Дата доставки</th>
              <th scope="col">Адреса доставки</th>
              <th scope="col">Контактний телефон</th>
              <th scope="col">Кількість води</th>
              <th scope="col">Вартість замовлення</th>
              <th scope="col">Хто створив заявку</th>
              <th scope="col">Статус заявки</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
          <nav aria-label="Page navigation">
            <ul id="pages" className="pagination"></ul>
          </nav>
          <button className="btn btn-primary font-size-increase" onClick={handleGoBack}>
            Повернутись назад
          </button>
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
                  <h4 className="modal-title">Створи нову заявку доставки птної води</h4>
                </div>
                <div className="modal-body">
                  <table>
                    <tbody>
                    <tr>
                      <td>
                        Дата доставки: <input type="datetime-local" id="deliveryDate"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Адреса: <input type="area" id="address" placeholder="address"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Контактний телефон: <input type="text" id="phone" placeholder="phone"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Кількість води: <input type="text" id="quantity" onChange="calculatePrice()" placeholder="quantity"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Вартість води з доставкою: <input type="text" id="price" disabled></input>
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
                        <input type="button" id="submitButton" value="Надати заявку на розгляд компанії щодо виконання замовлення"/>
                      </td>
                    </tr>
                    <tr>
                      <td><span id="messageSpan"></span></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" onClick={() => setModalInfoOpen(false)}>Закрити форму заявки
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