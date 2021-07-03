import React from "react";

export const ProfilePagePhoto = ({ photo, firstName, lastName }) => {
  const nameIntials = (firstName, lastName) => {
    const initials = [firstName, lastName].map((item) => item.substr(0, 1));
    return initials;
  };

  return photo !== null ? (
    <img
      src={photo}
      alt="me"
      className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover"
    />
  ) : (
    <div
      className={`flex text-2xl text-white items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-pink-600`}>
      <span>{nameIntials(firstName, lastName)}</span>
    </div>
  );
};
