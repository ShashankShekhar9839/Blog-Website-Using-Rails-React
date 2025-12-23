import React from "react";

function Profile({ imgSrc = "", name = "" }) {
  return (
    <div className="">
      <p>{name?.toUpperCase()}</p>
    </div>
  );
}

export default Profile;
