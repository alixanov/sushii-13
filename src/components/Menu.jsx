import React, { useState } from "react";
import Sidebar from "./Sidebar";
import food1 from "./assets/Rectangle 9.png";
import food2 from "./assets/Rectangle 10.png";
import food3 from "./assets/Rectangle 11.png";
import food4 from "./assets/Rectangle 12.png";
import food5 from "./assets/rancheros13.png";
import food6 from "./assets/Rectangle 14.png";
import food7 from "./assets/Rectangle 15.png";
import food8 from "./assets/Rectangle 16.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Menu = () => {
  const notify = () =>
    toast.success('"Your order is in the basket."', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const data = [
    {
      id: 1,
      img: food1,
      txt: "Smashed Avo",
      price: 20000,
      count: 1,
      info: "Су́ши, или су́си, — блюдо традиционной японской кухни, приготовленное из риса с уксусной приправой и различных морепродуктов, а также других ингредиентов. С начала 1980-х годов суши получило широкую популярность на Западе и во всём мире",
    },
    {
      id: 2,
      img: food2,
      txt: "Yin & Yong",
      price: 10000,
      count: 1,
      info: " Классический тип суши, который состоит из основы в виде рисового прямоугольника, наверху которого располагается рыба, чаще всего тунец или лосось",
    },
    {
      id: 3,
      img: food3,
      txt: "Pancakes",
      price: 10000,
      count: 1,
      info: "Су́ши, или су́си, — блюдо традиционной японской кухни, приготовленное из риса с уксусной приправой и различных морепродуктов, а также других ингредиентов. С начала 1980-х годов суши получило широкую популярность на Западе и во всём мире",
    },
    {
      id: 4,
      img: food4,
      txt: "Huesvos Rancheros",
      price: 10000,
      count: 1,
      info: " Классический тип суши, который состоит из основы в виде рисового прямоугольника, наверху которого располагается рыба, чаще всего тунец или лосось",
    },
    {
      id: 5,
      img: food5,
      txt: "Rancheros (Tofu)",
      price: 10000,
      count: 1,
      info: "Су́ши, или су́си, — блюдо традиционной японской кухни, приготовленное из риса с уксусной приправой и различных морепродуктов, а также других ингредиентов. С начала 1980-х годов суши получило широкую популярность на Западе и во всём мире",
    },
    {
      id: 6,
      img: food6,
      txt: "Breakkie Rol",
      price: 10000,
      count: 1,
      info: " Классический тип суши, который состоит из основы в виде рисового прямоугольника, наверху которого располагается рыба, чаще всего тунец или лосось",
    },
    {
      id: 7,
      img: food7,
      txt: "Breakkie Rol",
      price: 10000,
      count: 1,
      info: " Классический тип суши, который состоит из основы в виде рисового прямоугольника, наверху которого располагается рыба, чаще всего тунец или лосось",
    },
    {
      id: 8,
      img: food8,
      txt: "Buritto",
      price: 10000,
      count: 1,
      info: "Су́ши, или су́си, — блюдо традиционной японской кухни, приготовленное из риса с уксусной приправой и различных морепродуктов, а также других ингредиентов. С начала 1980-х годов суши получило широкую популярность на Западе и во всём мире",
    },
  ];
  const basket = JSON.parse(localStorage.getItem("key")) || [];

  const addBasket = (index) => {
    const selectedItem = data[index];
    const isItemInBasket = basket.some((item) => item.id === selectedItem.id);

    if (!isItemInBasket) {
      basket.push(selectedItem);
      localStorage.setItem("key", JSON.stringify(basket));
      notify();
    } else {
      toast.error("Order already added to the basket.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const [openInfoIndex, setOpenInfoIndex] = useState(null);

  const handleImageClick = (index) => {
    setOpenInfoIndex(openInfoIndex === index ? null : index);
  };

  const handleCloseModal = () => {
    setOpenInfoIndex(null);
  };

  return (
    <div className="menu">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="title-menu">
          <p>sushi food</p>
        </div>
        <div className="foods">
          {data.map((item, index) => (
            <div className="box" key={item.id}>
              <img
                src={item.img}
                alt=""
                onClick={() => handleImageClick(index)}
              />
              <p>{item.txt}</p>
              <button onClick={() => addBasket(index)}>Buy</button>
              {openInfoIndex === index && (
                <div className="open__modal-info" onClick={handleCloseModal}>
                  <p>{item.info}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
