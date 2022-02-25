import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function OpenClose() {
  const [menu, setMenu] = useState(true);

  function handleBars() {
    if (menu) {
      setMenu(false);
    }
    if (!menu) {
      setMenu(true);
    }
  }

  if (menu)
    return (
      <div>
        <FaBars
          onClick={handleBars}
          className="md:hidden text-white bg-black text-3xl flex m-1 cursor-pointer hover:text-black hover:bg-white duration-300"
        />
      </div>
    );

  return (
    <div>
      <MdOutlineClose
        onClick={handleBars}
        className="md:hidden text-white bg-black rounded-full text-3xl flex m-1 cursor-pointer hover:animate-spin hover:text-black hover:bg-white duration-300"
      />
    </div>
  );
}

export default OpenClose;
