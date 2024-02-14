import React, { useState } from "react";
import products from "../products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";

export default function Store() {
  const [icon, setIcon] = useState("view_list");
  function onSwitch(icon) {
    icon === "view_list" ? setIcon("view_module") : setIcon("view_list");
  }
  return (
    <div className="container">
      <IconSwitch icon={icon} onSwitch={onSwitch}/>
      <CardsView cards={products} cardsView={icon}/>
    </div>
  );
}
