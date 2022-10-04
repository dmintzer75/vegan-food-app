import React, { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.mealName,
      price: props.price,
      amount: amount,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
