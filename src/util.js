import { type } from "./constant";

export const getFilterKey = (search) => {
  if (type.diet.indexOf(search) > -1) {
    return "diet";
  }
  if (type.health.indexOf(search) > -1) {
    return "health";
  }
  if (type.mealType.indexOf(search) > -1) {
    return "mealType";
  }
  if (type.dishType.indexOf(search) > -1) {
    return "dishType";
  }
  if (type.cuisineType.indexOf(search) > -1) {
    return "cuisineType";
  }
};
