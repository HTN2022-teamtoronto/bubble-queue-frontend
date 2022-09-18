import React from "react";

function Button({ title }) {
  return (
    <button
      type="button"
      className="border-transparent	px-6 py-2.5 bg-pink-500 text-white font-medium text-xl uppercase rounded hover:bg-pink-700  focus:bg-pink-700 focus:ring-0 active:bg-pink-800  transition duration-150 ease-in-out w-3/12"
    >
      {title}
    </button>
  );
}

export default Button;
