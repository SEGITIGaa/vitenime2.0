import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, img }) => {

  const location = window.location.pathname;

  return (
    <>
      <Helmet>
        <meta property="og:title" content={title || "Halaman Default"} />
        <meta
          property="og:description"
          content={description || "Deskripsi Default"}
        />
        <meta property="og:image" content={img || "default-image-url"} />
        <meta property="og:url" content={`https://animenetwork.vercel.app${location}`} />

        <title>{title || "Anime Network"}</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Halaman A" />
        <meta name="twitter:description" content="Deskripsi halaman A." />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:url" content={`https://animenetwork.vercel.app${location}`} />
      </Helmet>
      <div className="flex items-center justify-center font-satoshi bg-main">
        <div className="flex flex-col min-h-screen w-11/12 md:w-4/5 gap-8 pb-20 pt-7 md:py-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
