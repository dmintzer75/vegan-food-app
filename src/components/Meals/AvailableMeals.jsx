import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest japanse cuisine inspired sushi",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "German speciality!",
      price: 11,
    },
    {
      id: "m3",
      name: "BBQ Vegan Burger",
      description: "American flavored legume burger",
      price: 12,
    },
  ];

  const meals_list = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      mealName={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals_list}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
