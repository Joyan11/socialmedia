import { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
export const AddPostInput = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onChangeHandler = (e) => setContent(e.target.value);

  const canSave = Boolean(content);

  const onSubmitHandler = () => {
    dispatch(postAdded(content));
    setContent("");
  };

  return (
    <div className="input-box bg-white pt-3 mb-5 w-full md:max-w-lg rounded shadow">
      <div className="flex pl-2 py-3x">
        <img
          src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="me"
          className="rounded-full w-12 h-12 object-cover"
        />
        <textarea
          className="resize-auto rounded mx-3 my-1 p-1 w-full bg-gray-100"
          placeholder={`what do you have in mind Billy?`}
          value={content}
          onChange={onChangeHandler}></textarea>
      </div>
      <div className="flex justify-between mb-2 mt-2">
        <label
          htmlFor="file"
          className="flex cursor-pointer items-center rounded p-2 ml-14 font-medium  hover:bg-gray-100">
          <HiOutlinePhotograph className="text-xl text-green-400" />
          <span className="text-gray-700">Add Photo</span>
          <input
            type="file"
            name="file"
            id="file"
            accept="image/png, image/jpeg"
            className="hidden"
          />
        </label>
        <button
          className=" mr-3 md:mr-5 px-8 bg-blue-500 text-white ring rounded-full hover:bg-blue-700 hover:shadow"
          disabled={!canSave}
          onClick={onSubmitHandler}>
          Post
        </button>
      </div>
    </div>
  );
};
