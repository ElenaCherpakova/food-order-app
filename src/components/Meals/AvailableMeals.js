import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchMeals = async () => {
    const response = await fetch(
      'https://foodyapp-44e91-default-rtdb.firebaseio.com/meals.json'
    );

    const data = await response.json();
    console.log("IM GETTING DATA", data);
    setAllMeals(data);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  if(isLoading){
    return <section className={styles.MealsLoading}>
      <p>Loading...</p>
    </section>
  }
  const mealsList = allMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));


  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
