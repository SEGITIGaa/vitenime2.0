const DownloadLinks = ({ download, eps }) => {
  const renderDownloadLinks = (typeFilter) => {
    return download
      .filter((type) => type.includes(typeFilter))
      .map(
        (type, index) =>
          eps.download[type].length > 0 && (
            <div
              className="col gap-4 border p-4 rounded-xl border-third"
              key={index}
            >
              <p className="text-second rounded-lg w-max font-semibold header">
                {`${type.split("p")[0].replace("d", " ")}p `}
              </p>

              <div className="grid grid-cols-3 gap-3">
                {eps.download[type].map((dt, index) => (
                  <a
                    href={dt.href}
                    key={index}
                    className="flex items-center justify-between bg-third transition-all duration-300 w-full gap-3 rounded-lg py-3 px-4"
                  >
                    <p className="text-xs md:text-sm text-second font-semibold">
                      {dt.nama}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )
      );
  };

  return (
    <div className="col md:w-2/3 gap-3">
      {/* Render MP4 Links */}
      <h2 className="text-lg text-second/70 font-semibold mb-3">Download MP4</h2>
      {renderDownloadLinks("mp4")}

      {/* Render MKV Links */}
      <h2 className="text-lg text-second/70 font-semibold mt-6 mb-3">Download MKV</h2>
      {renderDownloadLinks("mkv")}
    </div>
  );
};

export default DownloadLinks;
