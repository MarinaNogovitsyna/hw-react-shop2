import React from 'react'
import ShopItem from './ShopItem'

export default function CardsView({cards, cardsView}) {
    const isViewModule = cardsView === "view_module";

  return (
    <div className={`${isViewModule ? 'cards__view_module' : 'cards__view_list'}`}>
        {cards.map((el, index) => (
            <ShopItem item={el} key={index} cardsView={cardsView}/>
        ))}
    </div>
  )
}
