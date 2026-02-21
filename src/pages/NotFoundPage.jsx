import React from "react";

const NotFoundPage = () => {
  return (
    <div className="text-center py-20">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmppcXE3a3FsZGhvcHVranp5dnM2c2FzZXVmYmt4Z2p2MWRid29ieSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qWmn0h4IrnTWU5GyFX/giphy.gif"
          alt="funny gif"
          className="w-72 rounded-xl shadow-md flex items-center justify-center mx-auto mb-8"
        />
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Page Not Found</p>
    </div>
  );
};

export default NotFoundPage;
