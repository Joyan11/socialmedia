import { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { ProfilePhoto } from "../../components/ProfilePhoto";
export const EditProfile = ({ setshowEditModal, user }) => {
  const [image, setImage] = useState("");
  console.log(user);
  const [values, setValues] = useState({
    name: user.firstName,
    bio: user.bio,
    from: user.from,
    website: user.website,
  });
  console.log(image);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className=" max-w-lg w-11/12 md:w-full p-5 relative mx-auto my-auto rounded shadow-lg  bg-white ">
        <h1 className="text-2xl font-bold mb-1">Edit Details</h1>
        <div className="space-y-3">
          <div className="flex">
            <ProfilePhoto
              photo={user.profilePhoto}
              firstName={user.firstName}
              lastName={user.lastName}
            />
            <label
              htmlFor="file"
              className="flex cursor-pointer items-center rounded p-2 ml-14 font-medium  hover:bg-gray-100">
              <HiOutlinePhotograph className="text-xl text-green-400" />
              <span className="text-gray-700">Add/Change Photo</span>
              <input
                type="file"
                name="file"
                id="file"
                accept="image/png, image/jpeg, image/jpg"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <div className="space-y-2">
            <div>Name:</div>
            <input
              type="text"
              className="p-1 font-semibold ring-2 focus:ring-3 w-3/4"
              defaultValue={values.name}
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="space-y-2">
            <div>Bio:</div>
            <textarea
              type="text"
              className="p-1 font-semibold ring-2 focus:ring-3 w-3/4"
              defaultValue={values.bio}
              onChange={handleChange}
              id="bio"></textarea>
          </div>
          <div className="space-y-2">
            <div>Location:</div>
            <input
              type="text"
              className="p-1 font-semibold ring-2 focus:ring-3 w-3/4"
              defaultValue={values.from}
              onChange={handleChange}
              id="from"
            />
          </div>
          <div className="space-y-2">
            <div>Website:</div>
            <input
              type="text"
              className="p-1 font-semibold ring-2 focus:ring-3 w-3/4"
              defaultValue={values.website}
              onChange={handleChange}
              id="website"
            />
          </div>
        </div>
        <div className="p-3  mt-2 text-right space-x-4 md:block">
          <button
            onClick={() => setshowEditModal(false)}
            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
            Cancel
          </button>
          <button className="mb-2 md:mb-0 bg-blue-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
