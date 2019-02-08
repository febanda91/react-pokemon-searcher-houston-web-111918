import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      back: false
    }
  }


  toggleButton = () => {
    this.setState({back: !this.state.back})
  }
  
  
  render() {
    let pokemon = this.props.selectedPokemon
    return (
      <Card>
        <div onClick={this.toggleButton}>
          <div className="image">
            <img src={!this.state.back ? pokemon.sprites.front : pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats.map(stat => {
                if(stat.name === "hp"){
                  return stat.value
                }
              })}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
