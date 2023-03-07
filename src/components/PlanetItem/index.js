// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet
  return (
    <div className="container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h2 className="planet-heading">{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
