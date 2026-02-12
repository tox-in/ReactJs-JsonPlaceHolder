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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Router>
        <MainLayout isDarkMode={isDarkMode} isLoggedIn={isLoggedIn}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/albums" element={<AlbumsPage />} />
              <Route path="/todos" element={<TodosPage />} />
              <Route path="/comments" element={<CommentsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/photos" element={<PhotosPage />} />
            </Routes>
        </MainLayout>
      </Router>
  );
}

export default App;
