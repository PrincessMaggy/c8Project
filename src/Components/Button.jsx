import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <div class=" flex flex-col justify-between">
    <main class="flex-grow"> </main>
       
<footer className='mt-3'>
        <button
      className="bg-blue-500 text-white  hover:bg-blue-700 font-sans-medium  py-2 px-4 rounded"
      onClick={onClick}
    > <span>Go to meal plan</span>
      {children}
    </button>
    </footer>
    
    </div>
  );
};

export default Button;
