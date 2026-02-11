import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './pages/Home';
import PhotosPage from './pages/PhotosPage';
import AlbumsPage from './pages/AlbumsPage';
import TodosPage from './pages/TodosPage';
import CommentsPage from './pages/CommentsPage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Router>
        <Menu />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/photos" element={<PhotosPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App