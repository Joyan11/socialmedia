import React from "react";
import { useDispatch } from "react-redux";
// import { reactionAdded } from "./postSlice";
import { FiThumbsUp } from "react-icons/fi";
import { likedPost } from "./postSlice";

export const LikeButton = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(likedPost({ id: post.id }))}
      className="post-buttons">
      <FiThumbsUp />
      <span className="pl-1 text-base">Like</span>
    </button>
  );
};
