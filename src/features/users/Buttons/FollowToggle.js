import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followButtonPressed, unFollowButtonPressed } from "../userSlice";

export const FollowToggle = ({ user }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userConnection = () => {
    if (user?.followers.includes(currentUser?.userid)) {
      dispatch(unFollowButtonPressed(user._id));
    } else {
      dispatch(followButtonPressed(user._id));
    }
  };

  const buttonToggle = () => {
    if (user?.followers.includes(currentUser?.userid)) {
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
