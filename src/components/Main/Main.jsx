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

  const [price, setPrice] = useState(0);
  const calculatePrice = (event) => {
    let countL = event.target.value;
    let price = countL * 2;
    let discount = 0;
    if (countL >= 50 && countL < 100) {
      discount = price * 5 / 100;
    } else if (countL >= 100 && countL < 150) {
      discount = price * 10 / 100;
    } else if (countL >= 150 && countL < 200) {
      discount = price * 15 / 100;
    } else if (countL >= 200) {
      discount = price * 20 / 100;
    }
    price = price - Math.round(discount);
    setQuantity(countL);
    setPrice(price.toString());
  };

  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "date":
        setDate(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      date,
      address,
      phone,
      quantity,
      price
    };

    // Validate the user input
    if (!date) {
      alert("Please enter delivery date.");
      return;
    }
    if (!address) {
      alert("Please enter your address.");
      return;
    }

    fetch('http://localhost:8888/addTask', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ${user.access_token}',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask),
    }).then((response) => {
      if (response.status === 201) {
        // Redirect the user to the home page
        window.location.href = "/";
      } else {
        setErrors([response.statusText]);
      }
    })
    .catch((error) => {
      setErrors([error.message]);
    });
    ;
  }

  const openModal = () => {
    setModalInfoOpen(true);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
  <div className="col-auto ">
        <h1>Замов доставку питної води натиснувши <add
            style={{color: 'grey'}}>Add</add></h1>
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
              <a className="nav-link" href="#" id="deleteButton">Видалити
                виділене замовлення</a>
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
          <button className="btn btn-primary font-size-increase"
                  onClick={handleGoBack}>
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
                  <h4 className="modal-title">Створи нову заявку доставки птної
                    води</h4>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <table>
                    <tbody>
                    <tr>
                      <td>
                        Дата доставки: <input type="datetime-local" name="date"
                                              id="date" onChange={handleChange}/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Адреса: <input type="area" id="address" name="address"
                                       placeholder="address" onChange={handleChange}/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Контактний телефон: <input type="text" id="phone" name="phone"
                                                   placeholder="phone" onChange={handleChange}/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Кількість води: <input type="text" id="quantity" name="quantity"
                                               onChange={calculatePrice}
                                               placeholder="quantity"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Вартість води з доставкою: <input type="text" id="price" name="price"
                                            defaultValue={0}  disabled value={price}></input>
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
                        <input type="submit"
                               value="Надати заявку на розгляд компанії щодо виконання замовлення"/>
                      </td>
                    </tr>
                    <tr>
                      <td><span id="messageSpan"></span></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default"
                          onClick={() => setModalInfoOpen(false)}>Закрити форму
                    заявки
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </SimpleModal>
      </div>

  );
};

export default {Main};