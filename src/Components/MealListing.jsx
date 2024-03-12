import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function MealListing() {
  return (
    <div>
      <div className="flex align-center justify-center gap-3">
        {/*want to generate img and text(p) data from api */}
        <img></img>
        <p>Nigerian Jollof</p>
      </div>

      <div className="flex align-cneter justify-center gap-2">
        <span>View</span>
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
}

export default MealListing;
