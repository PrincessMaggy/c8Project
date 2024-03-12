import React from "react";
import MealListing from "./MealListing";

function Preview() {
  // testing my api endpoints to make sure its working properly
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.spoonacular.com/food/products/search?query=burger&number=10&apiKey=f43b6dd2ef2b48fdb352aafb14514692",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  return (
    <div>
      <div></div>

      <MealListing />

      <div className="flex align-center justify-center gap-2">
        <button type="btn" className="px-5 py-2 bg-[#4268FB] rounded-md">
          Add to bookmark
        </button>
        <button
          type="btn"
          className="px-10 py-2 bg-[#777777] text-white rounded-md"
        >
          Share
        </button>
      </div>
    </div>
  );
}
export default Preview;
