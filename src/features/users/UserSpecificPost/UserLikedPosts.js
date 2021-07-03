import React from "react";
import { useSelector } from "react-redux";
import { PostBody } from "../../posts/PostBody";
import { orderPostByDate } from "../../utils/orderPostByDate";

export const UserLikedPosts = () => {
  const { posts } = useSelector((state) => state.post);
  const orderedPost = orderPostByDate(posts);
  let renderContent;

  renderContent = React.Children.toArray(
    orderedPost?.map((post) => <PostBody post={post} />)
  );

  return <>{renderContent}</>;
};
