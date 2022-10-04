import React from "react";
import Button from "@mui/material/Button";
import classes from "./CustomButton.module.css";

const CustomButton = (props) => {
  const btnClasses = `${classes["cart-button"]} ${classes.bump}`;
  return (
    <div className={btnClasses}>
      <Button variant="contained" onClick={props.onClick}>
        <span>{props.icon}</span>
        <span className={classes.label}>{props.label}</span>
        <span className={classes.badge}>{props.badge}</span>
      </Button>
    </div>
  );
};

export default CustomButton;
