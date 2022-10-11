import React from "react";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";

function Cart() {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Shushi", amount: 21, price: 12 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>total</span>
        <span>12.34</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
}

export default Cart;
