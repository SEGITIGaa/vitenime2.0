const LoadingCardSmall = () => {
  return (
      Array.from({ length: 9 }).map((_, index) => (
        <div className="snap-start snap-always h-max w-full flex flex-col gap-3 items-center" key={index}>
          <div className="object-cover h-60 w-40 md:w-52 md:h-72 rounded-md bg-third animate-pulse"></div>
          <div className="flex flex-col gap-2 items-center w-5/6">
            <p className="w-full h-5 bg-third animate-pulse rounded-lg"></p>
            <p className=" w-1/3 h-5 bg-third animate-pulse rounded-lg"></p>
          </div>
        </div>
      ))
  );
};

const LoadingCard = () => {
  return (
      Array.from({ length: 7 }).map((_, index) => (
        <div className="snap-start snap-always h-max w-full flex flex-col gap-3 items-center" key={index}>
          <div className="object-cover w-60 h-72 rounded-md bg-third animate-pulse"></div>
          <div className="flex flex-col gap-2 items-center w-5/6">
            <p className="w-full h-5 bg-third animate-pulse rounded-lg"></p>
            <p className=" w-1/3 h-5 bg-third animate-pulse rounded-lg"></p>
          </div>
        </div>
      ))
  );
};

const LoadingPage = () => {
  return (
  <div className="flex items-center justify-center w-full h-screen">
    <img src="/loading-icon.png" alt="" className="md:w-32 md:h-32 w-10 h-10 animate-bounce rounded-full"/>
  </div>
  );
};

const AnimeLoading = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-frame bg-contain bg-top md:bg-left bg-no-repeat">
    <div className="w-1/2 md:w-1/5 h-56 md:h-80 rounded-lg mb-2 bg-third animate-pulse"></div>

    <div className="flex flex-col gap-10 w-full md:w-2/3">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="w-20 p-3 rounded-full bg-third animate-pulse"></div>
          <div className="w-40 p-3 rounded-full bg-third animate-pulse"></div>
        </div>

        <div className="w-4/5 md:w-2/3 bg-third animate-pulse h-15 md:h-16 rounded-md p-4"></div>

        <div className="md:w-1/5 w-2/3 bg-third animate-pulse h-5 rounded-md"></div>
      </div>

      <div className="md:w-1/5 w-2/3 bg-third animate-pulse p-2 rounded-md"></div>
    </div>
  </div>
  );
};

const EpisodeLoading = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-10">
    <div className="flex flex-col gap-5 md:w-2/3">
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="header md:w-2/3 bg-third rounded-md px-4 py-2 h-7 animate-pulse"></div>
        <div className="header w-full md:w-1/4 bg-third rounded-md px-4 py-2 h-10 animate-pulse"></div>
      </div>
      <div className="episode-frame bg-third animate-pulse"></div>
    </div>
  </div>
  );
};



export {LoadingCardSmall, LoadingCard, LoadingPage, AnimeLoading, EpisodeLoading};
