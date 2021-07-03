import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { ProfilePhoto } from "../../components/ProfilePhoto";
import { PostProfileHeader } from "../posts/PostProfileHeader";
import { useSelector } from "react-redux";
import { selectUserById } from "./userSlice";

export const Followers = () => {
  const { username } = useParams();
  console.log(username);

  const { followers } = useSelector((state) => selectUserById(state, username));
  console.log(followers);
  const myFollowers = useSelector((state) => state.user.userDb);
  console.log(myFollowers);

  const myTotalFollowers = followers.map((userid) => {
    return myFollowers.find((item) => item.id === userid);
  });

  console.log(myTotalFollowers);

  const renderFollowers = React.Children.toArray(
    myTotalFollowers.map((user) => (
      <div className="flex pl-2 pt-3 ">
        <ProfilePhoto
          photo={user.profilePhoto}
          firstName={user.firstName}
          lastName={user.lastName}
        />
        <div className="pl-3 pt-2">
          <PostProfileHeader
            username={user.username}
            firstName={user.firstName}
            lastName={user.lastName}
          />
        </div>
      </div>
    ))
  );

  return (
    <div className="flex items-center flex-col mt-3 mb-10">
      <h1>Followers</h1>
      <div className="bg-white mt-1 p-3 md:p-3 md:p-0 w-full md:w-1/2 rounded shadow">
        <div className="mx-2 py-1 border-b-2">
          <Link to="/home" className="flex items-center text-2xl font-bold ">
            <TiArrowBack />
            <span>Back</span>
          </Link>
        </div>
        {renderFollowers}
      </div>
    </div>
  );
};
