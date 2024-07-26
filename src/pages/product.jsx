import React from "react";
import { Link } from "react-router-dom";
export const Product = () => {
  return (
    <div className="grid justify-center gap-12">
      {" "}
      <h1 className="font-extrabold"> Product content</h1>
      <Link
        className="rounded-xl border-[2px] border-white bg-blue-500 py-3 text-center text-white transition-all duration-300 hover:border-blue-500 hover:bg-white hover:text-blue-500"
        to={"/"}
        children={"Categories Page"}
      />
    </div>
  );
};
