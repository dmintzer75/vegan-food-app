import React from "react";
import classes from "./CallToAction.module.css";
const CallToAction = () => {
  return (
    <section className={classes["call-to-action"]}>
      <h1>Delicious Vegan Food!</h1>

      <p>
        We deliver your free-from-suffering meal to your doorstep in less than
        20 minutes.
      </p>
    </section>
  );
};

export default CallToAction;
