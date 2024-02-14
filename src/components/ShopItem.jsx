import React from "react";

export default function ShopItem({ item, cardsView }) {
  const isViewModule = cardsView === "view_module";

  return (
    <div className={`card ${isViewModule ? 'card__view_module' : 'card__view_list'}`}>
      {isViewModule ? (
        <>
          <span className="card__name">{item.name}</span>
          <span className="card__color">{item.color}</span>
          <img src={item.img} alt="card img" className="card__img"/>
          <div className="card__price-and-btn">
            <span className="card__price">${item.price}</span>
            <button className="card__btn">add to cart</button>
          </div>
        </>
      ) : (
        <>
          <img src={item.img} alt="card img" className="card__img"/>
          <span className="card__name">{item.name}</span>
          <span className="card__color">{item.color}</span>
          <span className="card__price">${item.price}</span>
          <button className="card__btn">add to cart</button>
        </>
      )}
    </div>
  );
}
