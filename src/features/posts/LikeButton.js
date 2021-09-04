/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { reactionAdded } from "./postSlice";
import { FiThumbsUp } from "react-icons/fi";
import {
  likePost,
  likeSinglePost,
  unlikePost,
  unLikeSinglePost,
} from "./postSlice";
import { findAllByRole } from "@testing-library/react";

export const LikeButton = ({ post, type }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.auth);

  const likeColorToggle = (post) => {
    if (post?.likes.includes(currentUser.userid)) {
      return "text-blue-500";
    } else {
      return "";
    }
  };

  const likeButtonHandler = async (post) => {
    setLoading(true);
    try {
      if (post?.likes.includes(currentUser.userid)) {
        if (type === "single") {
          await dispatch(unLikeSinglePost(post._id));
        } else {
          await dispatch(unlikePost(post._id));
        }
      } else {
        if (type === "single") {
          await dispatch(likeSinglePost(post._id));
        } else {
          await dispatch(likePost(post._id));
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(loading);

  return (
    <button
      onClick={() => likeButtonHandler(post, currentUser)}
      disabled={loading ? true : false}
      className={`post-buttons ${likeColorToggle(
        post,
        dispatch,
        currentUser
      )}`}>
      <FiThumbsUp />
      <span className="pl-1 text-base">{loading ? "wait" : "Like"}</span>
    </button>
  );
};
