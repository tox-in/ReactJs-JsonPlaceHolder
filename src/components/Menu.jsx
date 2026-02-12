import { Link } from 'react-router-dom';

const Menu = () => {
  return (
      <nav className="w-full h-10 fixed bottom-8">
        <div className="w-fit px-[6px] py-1 bg-light backdrop-blur-md rounded-full mx-auto flex items-center justify-center gap-2">
        {/* <Link to="/" className="uppercase font-bold p-2 px-4">Home</Link> */}
        <Link to="/posts" className="uppercase font-bold p-2 px-4">Posts</Link>
        {/* <Link to="/albums" className="uppercase font-bold p-2 px-4">Albums</Link> */}
        <Link to="/todos" className="uppercase font-bold p-2 px-4">Todos</Link>
        {/* <Link to="/comments" className="uppercase font-bold p-2 px-4">Comments</Link> */}
        <Link to="/users" className="uppercase font-bold p-2 px-4">Users</Link>
        <Link to="/photos" className="uppercase font-bold p-2 px-4">Photos</Link>
        </div>
      </nav>
  );
};

export default Menu;
