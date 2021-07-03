import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { followButtonPressed, unfollowButtonPressed } from "../userSlice";

export const FollowToggle = ({ user }) => {
  console.log("following", user.followers);
  const dispatch = useDispatch();

  const userConnection = () => {
    if (user?.followers.some((user) => user === "4") === false) {
      dispatch(followButtonPressed(user.id));
    } else {
      dispatch(unfollowButtonPressed(user.id));
    }
  };

  const buttonToggle = () => {
    if (user.followers.some((user) => user === "4")) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <button onClick={userConnection} className="follow-button">
      {buttonToggle() ? "Follow" : "Unfollow"}
    </button>
  );
};
