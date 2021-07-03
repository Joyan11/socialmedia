import React from "react";
import { FiLogOut } from "react-icons/fi";

export const Logout = () => {
  return (
    <button className="logout-button flex items-center">
      <span>Logout</span>
      <FiLogOut className="pl-1 text-2xl" />
    </button>
  );
};
