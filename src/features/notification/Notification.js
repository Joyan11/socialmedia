import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ProfilePhoto } from "../../components/ProfilePhoto";
import { PostProfileHeader } from "../posts/PostProfileHeader";
import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from "react-redux";

export const Notification = () => {
  const { notification } = useSelector((state) => state.notify);
  console.log(notification);

  const renderNotifications = React.Children.toArray(
    notification.map((details) => (
      <Link
        to={`/${details.targetUser}/post/${details.postID}`}
        className="flex items-center space-x-2 pl-2 py-2 hover:bg-gray-100 transition delay-100 ease-in-out ">
        <ProfilePhoto photo={null} name={details.sourceUser} />
        <div className="text-1xl font-semibold">
          <span>{details.sourceUser}</span>
        </div>
        <div>
          {details.type === "LIKE" && `liked your post`}
          {details.type === "COMMENT" && `commented on your post`}
          {details.type === "FOLLOW" && `followed you`}
        </div>
        {!details.read && <GoPrimitiveDot className="text-blue-500" />}
      </Link>
    ))
  );

  return (
    <div className="flex items-center flex-col mt-3 mb-10">
      <div className="bg-white mt-1 p-3 md:p-3 md:p-0 w-full md:w-1/2 rounded shadow">
        <div className="mx-2 py-1 border-b-2">
          <div to="/home" className=" text-2xl font-bold ">
            Notifications
          </div>
        </div>
        {renderNotifications}
      </div>
    </div>
  );
};
