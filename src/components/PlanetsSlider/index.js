// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container" data-testid="planets">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <div>
              <PlanetItem eachPlanet={eachPlanet} key={eachPlanet.id} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
