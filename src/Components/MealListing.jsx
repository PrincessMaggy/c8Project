import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function MealListing() {
  const [meal, setMeals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=66bd861568c44b67b8175cac51037e76"
        );

        const data = await request.json();

        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {meal?.map((singleMeal, index) => (
        <div className="flex align-center justify-center gap-3" key={index}>
          <image
            src={singleMeal?.image}
            className="w-[200px] h-[200px] object-fit"
          />
          <p> {singleMeal?.title}</p>
        </div>
      ))}

      <div className="flex align-cneter justify-center gap-2">
        <span>View</span>
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
}

export default MealListing;
