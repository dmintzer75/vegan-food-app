import React, { useContext } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/header-img.jpg";
import CustomButton from "../UI/CustomButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../store/cart-context";
import CallToAction from "./CallToAction";

const Header = (props) => {
  const cartIcon = <ShoppingCartIcon className={classes.icon} />;

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>VFOrder</h1>
        <CustomButton
          onClick={props.onShowCart}
          label="Your Cart"
          badge={numberOfCartItems}
          icon={cartIcon}
          buttonStyle={{
            color: "#FEEC50",
          }}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food"></img>
        <div className={classes.centered}>
          <CallToAction />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
