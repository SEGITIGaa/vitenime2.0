import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center font-satoshi bg-main">
      <div className="flex flex-col min-h-screen w-11/12 md:w-4/5 gap-5 pb-20 pt-7 md:py-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
