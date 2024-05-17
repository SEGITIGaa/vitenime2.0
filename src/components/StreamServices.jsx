
const StreamServices = ({ episode, nonce, setIframe }) => {
  async function getIframe(content) {
    const response = await fetch(
      `https://web-anime-psi.vercel.app/getIframe?nonce=${nonce}&content=${content}`
    );
    const data = await response.json()
    const inframeSrc = new DOMParser()
      .parseFromString(data, "text/html")
      .querySelector("iframe")
      .getAttribute("src");
    setIframe(inframeSrc);
  }

  return (
    <select
      onChange={(e) => getIframe(e.target.value)}
      className="md:w-1/4 text-xs font-semibold text-second bg-third rounded-md px-4 py-2 h-max outline-none"
    >
      {episode.mirror.m360p.map((dt, index) => (
        <option key={index} value={dt.content} className="opt">
          {dt.nama} 360P
        </option>
      ))}
      {episode.mirror.m480p.map((dt, index) => (
        <option key={index} value={dt.content} className="opt">
          {dt.nama} 480p
        </option>
      ))}
      {episode.mirror.m720p.map((dt, index) => (
        <option key={index} value={dt.content} className="opt">
          {dt.nama} 720p
        </option>
      ))}
    </select>
  );
};

export default StreamServices;
