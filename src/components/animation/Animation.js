import React from "react";

function Animation() {
  return (
    <div className="border mx-auto image-container position-relative">
      <img className="border boy" src="/assets/boy.png" />
      <img className="border eyes position-absolute" src="/assets/eyes.png" />
      <img className="border mouth position-absolute" src="/assets/mouth.png" />
    </div>
  );
}

export default Animation;
