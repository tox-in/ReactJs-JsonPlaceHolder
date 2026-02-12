import Navbar from "./Navbar";
import Menu from "./Menu";

const MainLayout = ({ children, isDarkMode, isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar isDarkMode={isDarkMode} isLoggedIn={isLoggedIn} />
      <div className="flex flex-1">
        <Menu />
        <main className="flex-1 p-4 h-[calc(100vh-3.5rem)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;