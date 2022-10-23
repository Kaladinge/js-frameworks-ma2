import React from "react";

function Animation() {
  return (
    <>
      <div className="mx-auto image-container position-relative">
        <div className="boy-container">
          <img className="boy" src="/assets/boy.png" />
          <img className="eyes position-absolute" src="/assets/eyes.png" />
          <img className="mouth position-absolute" src="/assets/mouth.png" />
          <img className="mouth2 position-absolute" src="/assets/mouth2.png" />
        </div>
        <img className="boy3 position-absolute" src="/assets/boy3.png" />
        <div className="zombie-container position-absolute">
          <img className="zombie" src="/assets/zombie.png" />
        </div>
      </div>
      <div className="position-relative">
        <img className="grass position-relative" src="/assets/grass.png" />
        <img className="logo position-absolute" src="/assets/logo.png" />
      </div>
    </>
  );
}

export default Animation;
