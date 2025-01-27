import { useState } from "react";
import { baseUrl } from "../variables/Variables";
import { ChevronDown } from "lucide-react";

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
    <div className="relative flex justify-end w-full md:w-1/4 text-sm">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:max-w-40 border border-second text-second font-semibold rounded-md px-4 py-2 flex items-center justify-between outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selected}
        <ChevronDown
          className={`transition-transform duration-300 w-5 h-5 ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute z-10 eps bg-third rounded-md bottom-12 w-full max-h-52 overflow-y-auto shadow-lg shadow-main/70"
          role="menu"
          aria-label="Stream Options"
        >
          {["m360p", "m480p", "m720p"].map((resolution) =>
            episode.mirror[resolution]?.map((dt, index) => (
              <li
                key={`${resolution}-${index}`}
                role="menuitem"
                onClick={() =>
                  handleSelect(
                    dt.content,
                    `${dt.nama} ${resolution.replace("m", "")}`
                  )
                }
                className="px-4 py-2 transition-all hover:bg-main/50 cursor-pointer font-semibold font-satoshi text-second text-sm"
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
