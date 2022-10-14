import { NextPage } from "next";
import Image from "next/image";
import { Food } from "../types/foodType";
import styles from "../styles/FoodCard.module.css";

const FoodCard: NextPage<{ food: Food }> = ({ food }) => {
  return (
    <div className={styles.card}>
      <Image
        priority
        src={food.image}
        // className=""
        width={500}
        height={400}
        alt={food.name}
      />
      <div>
        <h4>{food.name}</h4>
        <p>{food.description}</p>
        <p>Rating: {food.rating}</p>
      </div>
    </div>
  );
};

export default FoodCard;
