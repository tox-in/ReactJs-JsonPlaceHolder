import Navbar from "./Navbar";
import Menu from "./Menu";

const MainLayout = ({ children, isDarkMode, currentUser }) => {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar isDarkMode={isDarkMode} currentUser={currentUser} />
      <div className="flex flex-1">
        <main className="flex-1 p-4 h-[calc(100vh-6.5rem)] overflow-y-auto bg-background rounded-lg relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;