import React from "react";
import { ProfilePhoto } from "../../../components/ProfilePhoto";
import { TimeAgo } from "../TimeAgo";
import { Link } from "react-router-dom";
import { PostProfileHeader } from "../PostProfileHeader";
export const Comments = ({ post }) => {
  const renderComments = React.Children.toArray(
    post.comments.map((item) => (
      <div className="bg-white mt-1 w-full p-1 md:p-0 md:max-w-lg rounded shadow">
        <div className="flex pl-2 pt-3">
          <ProfilePhoto photo={item.profilePhoto} name={item.firstName} />
          <div className="pl-3">
            <PostProfileHeader
              username={item.username}
              firstName={item.firstName}
              lastName={item.lastName}
            />
            <TimeAgo timestamp={item.date} />
          </div>
        </div>
        <div>
          <p className="py-3 px-2">{item.content}</p>
        </div>
      </div>
    ))
  );
  return <>{renderComments}</>;
};
