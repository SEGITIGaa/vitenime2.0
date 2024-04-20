import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center font-poppins">
      <div className="flex flex-col min-h-screen w-5/6 md:w-4/5 gap-5 py-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
