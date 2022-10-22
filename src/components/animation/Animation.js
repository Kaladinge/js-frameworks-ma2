import React from "react";

function Animation() {
  return (
    <div className="border mx-auto image-container position-relative">
      <div className="boy-container">
        <img className="border boy" src="/assets/boy.png" />
        <img className="border eyes position-absolute" src="/assets/eyes.png" />
        <img
          className="border mouth position-absolute"
          src="/assets/mouth.png"
        />
        <img
          className="border mouth2 position-absolute"
          src="/assets/mouth2.png"
        />
      </div>
      <img className="border boy3 position-absolute" src="/assets/boy3.png" />
    </div>
  );
}

export default Animation;
