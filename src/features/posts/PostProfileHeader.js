import React from "react";
import { Link } from "react-router-dom";
export const PostProfileHeader = ({ username, firstName, lastName }) => {
  return (
    <div className="flex items-center">
      <Link to={`/${username}`} className="font-medium font-bold">
        {firstName} {lastName}
      </Link>
      <Link
        to={`/${username}`}
        className="text-sm text-gray-400 font-semibold pl-2">
        @{username}
      </Link>
    </div>
  );
};
