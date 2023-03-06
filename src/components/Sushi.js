import React from "react";

function Sushi({sushis, eatSushi}) {
  
  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushis)}>
        {sushis.eaten ? null : (
          <img
            src={sushis.img_url} 
            alt={sushis.name} 
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushis.name} - ${sushis.price}
      </h4>
    </div>
  );
}

export default Sushi;
