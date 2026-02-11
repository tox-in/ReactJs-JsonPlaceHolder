import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todos from './Data/Todos';
import Users from './Data/Users';
import Photos from './Data/Photos';
import Albums from './Data/Albums';
import Comments from './Data/Comments';
import Navbar from './components/Navbar';
import Posts from './Data/Posts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  )
}

export default App


{/* <div className="card"> */}
        {/* <Todos /> */}
        {/* <Users /> */}
        {/* <Photos /> */}
        {/* <Albums /> */}
        {/* <Comments />  */}
        {/* <Posts /> */}
      {/* </div> */}