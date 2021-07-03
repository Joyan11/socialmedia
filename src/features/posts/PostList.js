import React from "react";
import { AddPostInput } from "./AddPostInput";
import { useSelector } from "react-redux";
import { PostBody } from "./PostBody";
import { orderPostByDate } from "../utils/orderPostByDate";
export const PostList = () => {
  const { posts } = useSelector((state) => state.post);

  const orderedPost = orderPostByDate(posts);
  let renderContent;

  renderContent = React.Children.toArray(
    orderedPost?.map((post) => <PostBody post={post} />)
  );

  return (
    <div className="flex items-center flex-col mt-3 mb-5">
      <AddPostInput />
      {renderContent}
    </div>
  );
};
