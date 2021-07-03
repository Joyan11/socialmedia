import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { PostList } from "./features/posts/PostList";
import { SinglePostPage } from "./features/posts/SinglePostPage/SinglePostPage";
import { UserProfile } from "./features/users/UserProfile";
import { UserPost } from "./features/users/UserSpecificPost/UserPost";
import { UserLikedPosts } from "./features/users/UserSpecificPost/UserLikedPosts";
import { Followers } from "./features/users/Followers";
import { Following } from "./features/users/Following";
import { Notification } from "./features/notification/Notification";
import { SearchModal } from "./components/SearchModal";
import useToggle from "./hooks/useToggle";
import { useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useToggle();

  return (
    <div className="App">
      <main className="bg-gray-200 h-screen overflow-x-auto">
        <Navbar setShowModal={setShowModal} />
        <Routes>
          <Route path="home" element={<PostList />} />
          <Route path=":username/post/:id" element={<SinglePostPage />} />
          <Route path=":username" element={<UserProfile />}>
            <Route path="/" element={<UserPost />} />
            <Route path="myposts" element={<UserPost />} />
            <Route path="mylikes" element={<UserLikedPosts />} />
          </Route>
          <Route path=":username/followers" element={<Followers />} />
          <Route path=":username/following" element={<Following />} />
          <Route path="notifications" element={<Notification />} />
        </Routes>
        {showModal && <SearchModal setShowModal={setShowModal} />}
      </main>
    </div>
  );
}

export default App;
