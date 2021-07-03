import React from "react";
import { useEffect } from "react";

export const ProfilePhoto = ({ photo, name }) => {
  // const nameIntials = (firstName, lastName) => {
  //   const initials = [firstName, lastName].map((item) => item.substr(0, 1));
  //   return initials;
  // };

  return photo !== null ? (
    <img src={photo} alt="me" className="rounded-full w-12 h-12 object-cover" />
  ) : (
    <div
      className={`flex text-2xl text-white items-center justify-center rounded-full w-12 h-12 bg-pink-600`}>
      <span>{name?.substr(0, 1)}</span>
    </div>
  );
};
