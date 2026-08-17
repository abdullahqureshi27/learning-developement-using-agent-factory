import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    console.log("navbar rerendered!");
  });

  return <div>I am navbar</div>;
};

export default Navbar;
