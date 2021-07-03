import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import { selectUserById } from "./userSlice";
import { ProfilePagePhoto } from "./ProfilePagePhoto";
import { UserDetails } from "./UserDetails";
import { FollowToggle } from "./Buttons/FollowToggle";
import { EditProfileButton } from "./Buttons/EditProfileButton";
import { EditProfile } from "./EditProfile";
import { Logout } from "./Buttons/Logout";
import { useState } from "react";

export const UserProfile = () => {
  const { username } = useParams();
  const [showEditModal, setshowEditModal] = useState(false);
  const user = useSelector((state) => selectUserById(state, username));
  const renderFollowButton = user.isAdmin || <FollowToggle user={user} />;
  const renderEditButton = user.isAdmin && (
    <EditProfileButton setshowEditModal={setshowEditModal} />
  );
  const renderLogout = user.isAdmin && <Logout />;

  return (
    <div className="flex items-center flex-col">
      <div className="bg-white mt-1 p-2 w-full md:p-0 md:w-2/5 rounded shadow">
        <div className=" justify-between mx-2 py-1 border-b-2">
          <Link to="/home" className="flex items-center text-2xl font-bold ">
            <TiArrowBack />
            <span>Back</span>
          </Link>
        </div>
        <div className="flex relative  p-2 md:p-3">
          <ProfilePagePhoto
            photo={user.profilePhoto}
            firstName={user.firstName}
            lastName={user.lastName}
          />
          <div className=" pl-3 mt-2">
            <p className=" font-extrabold text-base md:text-3xl capitalize">
              {user.firstName} {user.lastName}
            </p>
            <p className="font-bold text-gray-500 text-base md:text-2xl ">
              @{user.username}
            </p>
            <div className="flex mt-2">
              <div>{renderEditButton}</div>
            </div>
          </div>
          <div className="absolute right-0 top-3 md:top-4  md:mr-5">
            {renderLogout}
          </div>
          <div className="absolute right-0 top-3 md:top-4 md:mr-5">
            {renderFollowButton}
          </div>
        </div>
        <UserDetails user={user} />
        <div className="flex justify-around my-1 border-t-2">
          <NavLink to="myposts" className="post-buttons">
            <span className="pl-1 text-base"> My Posts</span>
          </NavLink>
          <NavLink to="mylikes" className="post-buttons">
            <span className="pl-1 text-base">Likes</span>
          </NavLink>
        </div>
        <div className="flex items-center flex-col mt-3 mb-5">
          <Outlet />
        </div>
      </div>
      {showEditModal && (
        <EditProfile setshowEditModal={setshowEditModal} user={user} />
      )}
    </div>
  );
};
