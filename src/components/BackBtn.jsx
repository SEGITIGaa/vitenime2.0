import React from "react";

const BackBtn = ({className}) => {
  return (
    <div onClick={() => window.history.back()} className={className || "arrow-btn"}>
      <img
        src={"/arrow.svg"}
        alt=""
        height={18}
        width={18}
        className="rotate-180"
      />
      back
    </div>
  );
};

export default BackBtn;
