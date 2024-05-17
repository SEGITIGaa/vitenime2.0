const DownloadLinks = ({download, eps}) => {
  return (
    <div className="col md:w-2/3 gap-3">
    {download.map(
      (type, index) =>
        eps.download[type].length > 0 && (
          <div className="col gap-4 border p-4 rounded-xl border-third" key={index}>
            <p className="text-second rounded-lg w-max font-semibold font-fira text-sm md:text-lg">
              {`${type.split("p")[0].replace("d", " ")}p `}
              <span className="text-[10px]">
                {type.includes("mp4") ? "MP4" : "MKV"}
              </span>
            </p>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {eps.download[type].map((dt, index) => (
                <a href={dt.href} key={index} className="flex items-center justify-between bg-third transition-all duration-300 w-full gap-3 rounded-lg md:py-3 p-2 md:px-4">
                  <p className="text-xs md:text-sm text-second font-semibold">
                    {dt.nama}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )
    )}
  </div>
  )
}

export default DownloadLinks
