import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { PostProfileHeader } from "../features/posts/PostProfileHeader";
import { searchUserClicked } from "../features/users/userSlice";
import { toastError } from "../features/utils/toastMessage";
import { ProfilePhoto } from "./ProfilePhoto";

export const SearchModal = ({ setShowModal }) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle");
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    (async () => {
      try {
        setStatus("pending");
        const result = await dispatch(searchUserClicked(input.toLowerCase()));
        unwrapResult(result);
        if (result.meta.requestStatus === "fulfilled") {
          setUsers(result.payload);
          setStatus("success");
        }
      } catch (error) {
        console.log(error);
        toastError("something went wrong");
      }
    })();
  };

  const renderUsers =
    status === "success" && users.length === 0 ? (
      <div className="text-center">
        <p className="p-2">No user Found</p>
      </div>
    ) : (
      React.Children.toArray(
        users?.map((user) => (
          <div onClick={setShowModal} className="flex items-center space-x-1">
            <ProfilePhoto photo={user.profilePicture} name={user.name} />
            <PostProfileHeader username={user.username} name={user.name} />
          </div>
        ))
      )
    );

  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className=" max-w-lg w-11/12 md:w-full p-5 relative mx-auto my-auto rounded shadow-lg  bg-white ">
        <div className="space-y-4">
          <div>
            <>sample search for test or joey</>
            <div className="flex items-center space-x-1 cursor-pointer ">
              <input
                type="text"
                autoFocus={true}
                className="text ring rounded-full text-1xl p-1 w-full"
                placeholder="Search for a user"
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={handleClick} className="focus:text-green-500">
                <BiSearchAlt2 className=" text-4xl" />
              </button>
            </div>
          </div>
          {renderUsers}
        </div>
        <div className="p-3  mt-2 text-right space-x-4 md:block">
          <button
            onClick={setShowModal}
            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
