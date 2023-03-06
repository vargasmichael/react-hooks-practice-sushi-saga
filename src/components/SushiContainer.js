import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, nextSushis, eatSushi}) {
  return (
    <div className="belt" >
      {sushis.map(sushi => <Sushi key={sushi.id} sushis={sushi} eatSushi={eatSushi}/>)}
      {/* mapping through the sushis, added a key of id */}
       
      <MoreButton handleClick={nextSushis} />
    </div>
  );
}

export default SushiContainer;
