import playerData from "./playerData.js"
import { useState } from "react"

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)
  function toggleCard() {
    setShowPicture(!showPicture)
  }
  if (showPicture){
    return (
    <div className="card" onMouseEnter={toggleCard}>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt="" />
    </div>
  )} else {

  const statsDisplay = Object.entries(props.stats).map(([name, value]) => (
    <p key={name}>
      {name}: {value}
    </p>
  ))
  return (
    <div className="card" onMouseLeave={toggleCard}>
      <h2>{props.name}</h2>
      <p>{props.team}</p>
      <p>{props.position}</p>
      {statsDisplay}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}}

function App() {
  const cards = playerData.map((player) =>  <BaseballCard 
    name={player.name}
    team={player.team}
    position={player.position}
    stats={player.stats}
    imgUrl={player.imgUrl}
    key={player.cardId}
    />)
  return <>{cards}</>
}

export default App;
