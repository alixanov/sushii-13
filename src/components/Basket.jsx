import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Basket = () => {
  const basketData = JSON.parse(localStorage.getItem("key")) || [];
  const [totalPrice, setTotalPrice] = useState(0); // Добавляем state для total price
  const [basketItems, setBasketItems] = useState(basketData);

  const onPlus = (id) => {
    const updateData = basketItems.map((item) => {
      if (item.id === id) {
        item.count = item.count + 1;
      }
      return item;
    });

    localStorage.setItem("key", JSON.stringify(updateData));
    setBasketItems(updateData);
    calculateTotalPrice(updateData); // Пересчитываем общую сумму
  };

  const onMinus = (id) => {
    const updateData = basketItems.map((item) => {
      if (item.id === id && item.count > 1) {
        item.count = item.count - 1;
      }
      return item;
    });
    localStorage.setItem("key", JSON.stringify(updateData));
    calculateTotalPrice(updateData); // Пересчитываем общую сумму
  };

  const onDeleted = (id) => {
    const updateData = basketItems.filter((item) => item.id !== id);
    setBasketItems(updateData);
    localStorage.setItem("key", JSON.stringify(updateData));
  };

  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.count;
    });
    setTotalPrice(total);
  };

  const modalAdd = (basket) =>
    basket.map((item, index) => (
      <div className="box-modal" key={index}>
        <div className="imgs-price-info">
          <img src={item.img} alt="" />
          <div className="price-info">
            <p>{item.txt}</p>
            <span>{item.price * item.count} P</span>
          </div>
        </div>
        <div className="canculation">
          <button onClick={() => onMinus(item.id)}>-</button>
          <span>{item.count}</span>
          <button onClick={() => onPlus(item.id)}>+</button>
          <button onClick={() => onDeleted(item.id)}>x</button>
        </div>
      </div>
    ));

  const basket = JSON.parse(localStorage.getItem("key")) || [];

  return (
    <div className="basket">
      <div className="left-basket">
        <Sidebar />
      </div>

      <div className="right-basket">
        <div className="title-basket">
          <p>CART</p>
        </div>

        <div className="card-basket">
          <div className="box-left">
            {/* Отобразить содержимое корзины */}
            {modalAdd(basket)}
          </div>

          <div className="box-right">
            <p>Your subtotal</p>
            <span>Subtotal {totalPrice} </span>
            <button id="btn-end">Confirm Order</button>
            <h5>Promo Code </h5>
            <input type="text" name="" id="" placeholder="enter promo coder" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
