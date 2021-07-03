import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiPaperPlane } from "react-icons/bi";
import { AiFillBell, AiOutlineSearch } from "react-icons/ai";

function Navbar({ setShowModal }) {
  useEffect(() => {
    console.log(process.env);
  }, []);
  let username = "bgilmour";
  let photo = null;
  return (
    <div className="flex justify-between bg-white p-1 sticky top-0 z-10">
      <div className="flex p-2">
        <BiPaperPlane className="text-3xl text-blue-500" />
        <p className="text-2xl md:text-3xl font-bold text-blue-500">
          <Link to="/home">PaperPlane</Link>
        </p>
      </div>
      <div className="flex space-x-2">
        <div className="py-2">
          <AiOutlineSearch
            onClick={setShowModal}
            className="text-4xl text-gray-500 cursor-pointer"
          />
        </div>
        <Link to="notifications">
          <div className="py-2 relative">
            <AiFillBell className="text-4xl text-gray-500" />
            <span className="absolute  top-3 left-3 pl-0.5  text-1xl text-white">
              3
            </span>
          </div>
        </Link>
        <Link to={`${username}`}>
          <div className="flex items-center space-x-1 bg-gray-200 rounded-full mt-2 pr-2 mr-2 md:mr-4">
            {/* <BiUserCircle className="text-4xl text-gray-500" /> */}{" "}
            {photo !== null ? (
              <img
                src={photo}
                alt="me"
                className="rounded-full w-9 h-9 object-cover"
              />
            ) : (
              <div>
                <div
                  className={`flex text-1xl text-white items-center justify-center rounded-full w-9 h-9 bg-pink-600`}>
                  <span>B</span>
                </div>
              </div>
            )}
            <div>Billy</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
