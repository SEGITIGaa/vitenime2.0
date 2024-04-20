import React from "react";

const LoadingCardSmall = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="snap-start snap-always h-max w-full flex flex-col gap-3 items-center" key={index}>
          <div className="object-cover h-60 w-36 md:w-60 md:h-72 rounded-md bg-slate-300 animate-pulse"></div>
          <div className="flex flex-col gap-2 items-center w-5/6">
            <p className="w-full h-5 bg-third animate-pulse rounded-lg"></p>
            <p className=" w-1/3 h-5 bg-third animate-pulse rounded-lg"></p>
          </div>
        </div>
      ))}
    </>
  );
};

const LoadingCard = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="snap-start snap-always h-max w-full flex flex-col gap-3 items-center" key={index}>
          <div className="object-cover w-60 h-72 rounded-md bg-slate-300 animate-pulse"></div>
          <div className="flex flex-col gap-2 items-center w-5/6">
            <p className="w-full h-5 bg-third animate-pulse rounded-lg"></p>
            <p className=" w-1/3 h-5 bg-third animate-pulse rounded-lg"></p>
          </div>
        </div>
      ))}
    </>
  );
};

const LoadingPage = () => {
  return (
  <div className="flex items-center justify-center w-full h-screen">
    <img src="/loading-icon.png" alt="" className="md:w-32 md:h-32 w-10 h-10 animate-bounce rounded-full"/>
  </div>
  );
};

export {LoadingCardSmall, LoadingCard, LoadingPage};
