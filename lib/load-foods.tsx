import foodList from "../pages/foods";

export async function loadFoods() {
  console.log(foodList);
  return foodList;
}
