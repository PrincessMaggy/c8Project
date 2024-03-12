import React from "react";
import MealListing from "./MealListing";

function Preview() {
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
