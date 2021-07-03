import { BiSearchAlt2 } from "react-icons/bi";
import { PostProfileHeader } from "../features/posts/PostProfileHeader";
import { ProfilePhoto } from "./ProfilePhoto";

export const SearchModal = ({ setShowModal }) => {
  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className=" max-w-lg w-11/12 md:w-full p-5 relative mx-auto my-auto rounded shadow-lg  bg-white ">
        <div className="space-y-4">
          <div>
            <div className="flex items-center space-x-1 cursor-pointer ">
              <input
                type="text"
                className="text ring rounded-full text-1xl p-1 w-full"
                placeholder="Search for a user"
              />
              <button className="focus:text-green-500">
                <BiSearchAlt2 className=" text-4xl" />
              </button>
            </div>
          </div>
          <div onClick={setShowModal} className="flex items-center space-x-1">
            <ProfilePhoto photo={null} name="Billy" />
            <PostProfileHeader
              username="bgilmour"
              firstName="Billy"
              lastName="Gilmour"
            />
          </div>
          <div onClick={setShowModal} className="flex items-center space-x-1">
            <ProfilePhoto photo={null} name="Billy" />
            <PostProfileHeader
              username="jamstrong"
              firstName="Joey"
              lastName="Armstrong"
            />
          </div>
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
