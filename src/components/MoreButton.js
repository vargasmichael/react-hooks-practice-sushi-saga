import React from "react";

function MoreButton({handleClick}) {
  return <button onClick={handleClick}>More sushi!</button>;
  //handlclick is passed up to MoreButton, which is passed to SushiContainer which is passed to be called in the app 
}

export default MoreButton;
