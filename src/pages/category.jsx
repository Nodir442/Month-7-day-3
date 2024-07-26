import React from "react";
import { Link } from "react-router-dom";
export const Category = () => {
  return (
    <div className="grid justify-center gap-12">
      <h1 className="font-extrabold"> Category content</h1>
      <Link
        className="rounded-xl border-[2px] border-white bg-green-500 py-3 text-center text-white transition-all duration-300 hover:border-green-500 hover:bg-white hover:text-green-500"
        to={"product"}
        children={"Product Page"}
      />
    </div>
  );
};
