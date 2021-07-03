import React from "react";
// import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { LikeButton } from "../LikeButton";
import { commentPost, selectPostById } from "../postSlice";
import { BiComment } from "react-icons/bi";
import { TimeAgo } from "../TimeAgo";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Comments } from "./Comments";
import { ProfilePhoto } from "../../../components/ProfilePhoto";
import { useState } from "react";
import { PostProfileHeader } from "../PostProfileHeader";

export const SinglePostPage = () => {
  const [showBox, setShowBox] = useState(false);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const canPost = Boolean(comment);

  const post = useSelector((state) => selectPostById(state, id));

  const handleOnclickHandler = () => {
    dispatch(commentPost(comment, id));
    setShowBox(false);
    setComment("");
  };

  return (
    <section>
      <div className="flex items-center flex-col mt-3 mb-10">
        <div className="bg-white mt-3 max-w-lg md:max-w-lg rounded shadow">
          <div className="mx-2 py-1 border-b-2">
            <Link to="/home" className="flex items-center text-2xl font-bold ">
              <TiArrowBack />
              <span>Feed</span>
            </Link>
          </div>
          <div className="flex pl-2 pt-3">
            <ProfilePhoto photo={post.profilePhoto} name={post.firstName} />
            <div className="pl-3">
              <PostProfileHeader
                username={post.username}
                firstName={post.firstName}
                lastName={post.lastName}
              />
              <TimeAgo timestamp={post.date} />
            </div>
          </div>
          <div>
            <p className="py-3 px-2">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="name" className="mt-2 p-1 md:p-0" />
            )}
          </div>
          <div className="flex justify-end my-2 text-gray-700">
            <p className="mr-2">{post.likes} likes</p>
            <p className="mr-2">{post.comments.length} comments</p>
          </div>
          <div className="flex justify-around my-1 border-t-2">
            <LikeButton post={post} />
            <button className="post-buttons" onClick={() => setShowBox(true)}>
              <BiComment />
              <span className="pl-1 text-base">Comment</span>
            </button>
          </div>
          {showBox && (
            <div className="flex items-center flex-col my-3">
              <textarea
                autoFocus={true}
                className="w-11/12 md:w-11/12 bg-gray-200 rounded-lg p-2"
                coloums="40"
                placeholder="Would you like to make a comment?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}></textarea>
              <div className="inline self-end mr-3 mt-2">
                <button
                  className="comment-buttons"
                  onClick={() => setShowBox(false)}>
                  Cancle
                </button>
                <button
                  className="comment-buttons"
                  onClick={handleOnclickHandler}
                  disabled={!canPost}>
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
        <Comments post={post} />
      </div>
    </section>
  );
};
