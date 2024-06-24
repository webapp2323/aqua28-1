import React, { useEffect, useState } from "react";
import { SimpleModal } from "../SimpleModal/SimpleModal";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hook/useAuth';

export const Main = () => {
  const { user } = useAuth();
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductPrice, setSelectedProductPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth'
    });
    if (user && user.token) {
      loadTasks(0);
      loadProducts();
    }
  }, [user]);

  const calculatePrice = (quantity, unitPrice = selectedProductPrice) => {
    let discount = 0;
    let price = quantity * unitPrice;
    if (quantity >= 50 && quantity < 100) {
      discount = price * 0.05;
    } else if (quantity >= 100 && quantity < 150) {
      discount = price * 0.1;
    } else if (quantity >= 150 && quantity < 200) {
      discount = price * 0.15;
    } else if (quantity >= 200) {
      discount = price * 0.2;
    }
    price = price - Math.round(discount);
    setPrice(price.toString());
  };

  const loadTasks = (page) => {
    if (!user || !user.token) {
      console.error('User or token is not available');
      return;
    }

    fetch(`/api/tasks?page=${page}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Accept': 'application/json'
      }
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          console.log('Loaded tasks:', data);
          setTasks(data);
          setTotalPages(Math.ceil(data.length / 5));
        })
        .catch(error => {
          console.error('Error loading tasks:', error);
        });
  };

  const loadProducts = () => {
    fetch(`/api/products`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Accept': 'application/json'
      }
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          setProducts(data);
        })
        .catch(error => {
          console.error('Error loading products:', error);
        });
  };

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
      case "product":
        const selectedProduct = products.find(product => product.id === parseInt(event.target.value));
        setSelectedProductId(selectedProduct.id);
        setSelectedProductPrice(selectedProduct.unitPrice);
        if (quantity) {
          calculatePrice(quantity, selectedProduct.unitPrice);
        }
        break;
    }
  };

  const handleQuantityChange = (event) => {
    const quantity = event.target.value;
    setQuantity(quantity);
    if (selectedProductPrice) {
      calculatePrice(quantity, selectedProductPrice);
    }
  };

  useEffect(() => {
    if (quantity && selectedProductPrice) {
      calculatePrice(quantity, selectedProductPrice);
    }
  }, [selectedProductPrice, quantity]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      date,
      address,
      phone,
      quantity,
      price,
      productId: selectedProductId
    };

    if (!date || !address || !phone || !quantity || !selectedProductId) {
      alert("Please fill all fields.");
      return;
    }

    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask),
    }).then((response) => {
      if (response.ok) {
        window.location.href = "/";
      } else {
        setErrors([response.statusText]);
      }
    })
        .catch((error) => {
          setErrors([error.message]);
        });
  };

  const handleDelete = () => {
    if (!selectedTasks.length) {
      alert("Please select at least one task to delete.");
      return;
    }

    console.log('Selected task IDs for deletion:', selectedTasks); // Логирование на фронтенде

    fetch('/api/tasks/delete', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedTasks),
    }).then((response) => {
      if (response.ok) {
        setSelectedTasks([]);
        loadTasks(0);
      } else {
        setErrors([response.statusText]);
      }
    })
        .catch((error) => {
          setErrors([error.message]);
        });
  };

  const handleTaskSelection = (taskId) => {
    setSelectedTasks(prevSelected => {
      const updatedSelection = prevSelected.includes(taskId)
          ? prevSelected.filter(id => id !== taskId)
          : [...prevSelected, taskId];

      console.log('Updated selectedTasks:', updatedSelection); // Логирование для проверки
      return updatedSelection;
    });
  };

  const openModal = () => {
    setModalInfoOpen(true);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
      <div className="col-auto">
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
              <a className="nav-link" href="#" id="deleteButton" onClick={handleDelete}>Видалити виділене замовлення</a>
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
            {tasks.map(task => (
                <tr key={task.id}>
                  <td>
                    <input type="checkbox" value={task.id} onChange={(e) => handleTaskSelection(task.id)} />
                  </td>
                  <td>{new Date(task.date).toLocaleString()}</td>
                  <td>{task.address}</td>
                  <td>{task.phone}</td>
                  <td>{task.quantity}</td>
                  <td>{task.price}</td>
                  <td>{task.taskOwner}</td>
                  <td>{task.status}</td>
                </tr>
            ))}
            </tbody>
          </table>
          <nav aria-label="Page navigation">
            <ul id="pages" className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} className="page-item">
                    <button className="page-link" onClick={() => loadTasks(i)}>
                      Page {i + 1}
                    </button>
                  </li>
              ))}
            </ul>
          </nav>
          <button className="btn btn-primary font-size-increase" onClick={handleGoBack}>
            Повернутись назад
          </button>
        </div>

        <SimpleModal isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
          <h2>Modal Info</h2>
          <div id="addModal" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Створи нову заявку доставки птної води</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <table>
                      <tbody>
                      <tr>
                        <td>Дата доставки: <input type="datetime-local" name="date" id="date" onChange={handleChange} /></td>
                      </tr>
                      <tr>
                        <td>Адреса: <input type="area" id="address" name="address" placeholder="address" onChange={handleChange} /></td>
                      </tr>
                      <tr>
                        <td>Контактний телефон: <input type="text" id="phone" name="phone" placeholder="phone" onChange={handleChange} /></td>
                      </tr>
                      <tr>
                        <td>Тип води:
                          <select name="product" onChange={handleChange}>
                            <option value="">Select product</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.name}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Кількість води: <input type="text" id="quantity" name="quantity" onChange={handleQuantityChange} placeholder="quantity" /></td>
                      </tr>
                      <tr>
                        <td>Вартість води з доставкою: <input type="text" id="price" name="price" defaultValue={0} disabled value={price}></input></td>
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
                        <td><input type="submit" value="Надати заявку на розгляд компанії щодо виконання замовлення" /></td>
                      </tr>
                      <tr>
                        <td><span id="messageSpan"></span></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={() => setModalInfoOpen(false)}>Закрити форму заявки</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </SimpleModal>
      </div>
  );
};

export default Main;
