import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import PhotosPage from "./pages/PhotosPage";
import AlbumsPage from "./pages/AlbumsPage";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import Menu from "./components/Menu";
import MyPostsPage from "./Data/MyPostsPage";
import CreatePostPage from "./pages/CreatePostPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./components/AuthContext";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {currentUser, login, logout, setCurrentUser} = useAuth();
  const isLoggedIn = !!currentUser;

  return (
    <Router>
      <MainLayout
        isDarkMode={isDarkMode}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      >
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/posts"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <PostsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route
            path="/todos"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <TodosPage />
              </ProtectedRoute>
            }
          />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/myPosts" element={<MyPostsPage />} />
          <Route path="/createPost" element={<CreatePostPage />} />
          <Route
            path="/login"
            element={<LoginPage login={login} isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
