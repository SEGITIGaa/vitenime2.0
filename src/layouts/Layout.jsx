import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center font-satoshi">
      <div className="flex flex-col min-h-screen w-10/12 md:w-4/5 gap-5 md:py-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
