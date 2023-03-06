import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const displaySize = 4;


function App() {
  const [sushis, setsushis] = useState([])
  const [startSushi, setStartSushi] = useState(0)
  const [money, setmoney] = useState(200)
  // setting the state for changing the money everytime a sushi is clicked

useEffect(() => {
  fetch(API)
    .then((r) => r.json())
    .then(setsushis)
     }, []);

  function nextSushis(){
    setStartSushi(startSushi + displaySize);
  }
function eatSushi(sush) {
  if (sush.price <= money) {
  setsushis(sushis.map((sushi) => (sush.id === sushi.id ? {...sushi, eaten: true} : sushi)))
  setmoney(money - sush.price)
  }
}

  return (
    <div className="app">
      <SushiContainer sushis={sushis.slice(startSushi, startSushi + displaySize)} nextSushis={nextSushis} eatSushi={eatSushi}/>
      <Table money={money}/>
    </div>
  );
}

export default App;
