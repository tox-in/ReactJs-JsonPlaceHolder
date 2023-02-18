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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <MainLayout
        isDarkMode={isDarkMode}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
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
          <Route
            path="/login"
            element={<LoginPage setCurrentUser={setCurrentUser} />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
