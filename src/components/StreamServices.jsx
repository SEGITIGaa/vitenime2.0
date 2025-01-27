import { useState } from "react";
import { baseUrl } from "../variables/Variables";

const StreamServices = ({ episode, nonce, setIframe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Pilih Resolusi");

  async function getIframe(content) {
    const response = await fetch(
      `${baseUrl}getIframe?nonce=${nonce}&content=${content}`
    );
    const data = await response.json();
    const inframeSrc = new DOMParser()
      .parseFromString(data, "text/html")
      .querySelector("iframe")
      .getAttribute("src");
    setIframe(inframeSrc);
  }

  const handleSelect = (content, nama) => {
    setSelected(nama);
    setIsOpen(false);
    getIframe(content);
  };

  return (
    <div className="relative inline-block w-full md:w-1/4 text-xs">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-third text-second font-semibold rounded-md px-4 py-2 flex items-center justify-between outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selected}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute z-10 bg-third border border-second rounded-md mt-2 w-full max-h-40 overflow-y-auto shadow-lg"
          role="menu"
          aria-label="Stream Options"
        >
          {["m360p", "m480p", "m720p"].map((resolution) =>
            episode.mirror[resolution]?.map((dt, index) => (
              <li
                key={`${resolution}-${index}`}
                role="menuitem"
                onClick={() => handleSelect(dt.content, `${dt.nama} ${resolution.replace("m", "")}`)}
                className="px-4 py-2 hover:bg-second hover:text-white cursor-pointer"
              >
                {dt.nama} {resolution.replace("m", "").toUpperCase()}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default StreamServices;
