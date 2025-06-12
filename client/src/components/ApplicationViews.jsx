import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Home } from "./Home/Home";
import { CreatePost } from "./CreatePost.jsx";
import { AllPosts } from "./allPosts/AllPosts.jsx";
import { PostDetails } from "./postDetails/PostDetails.jsx";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Home/>
            </AuthorizedRoute>
          }
        />
        <Route
        path="create-post"
        element={
          <AuthorizedRoute loggedInUser={loggedInUser}>
            <CreatePost/>
          </AuthorizedRoute>
        }
        />

        <Route
        path="all-posts"
        element={
          <AuthorizedRoute loggedInUser={loggedInUser}>
            <AllPosts/>
          </AuthorizedRoute>
        }
        />

        <Route
        path="post/:postId"
        element={
          <AuthorizedRoute loggedInUser={loggedInUser}>
            <PostDetails loggedInUser={loggedInUser}/>
          </AuthorizedRoute>
        }
        />
       
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}