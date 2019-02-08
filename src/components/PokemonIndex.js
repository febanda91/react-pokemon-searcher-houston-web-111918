import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'



let updateElementInArray = (array, id, values) => {
  return array.map( (element) => {
    if(element.id == id){
      return { ...element, ...values }
    } else {
      return element
    }
  })
}

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemon: [],
      nameSearch: ''
    }
  }


  handleSearch = (nameSearch) => {
    this.setState({nameSearch})
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.state.nameSearch)
    })
  }


  // Sets state of pokemon to [{...current state of pokemon plus the new pokemon}]
  addPokemonToPage = (pokemon) => {
    this.setState({pokemon: [{...this.state.pokemon, pokemon}]})
  }

  


  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon =>{
      this.setState({
        pokemon: pokemon
      })
    })
  }



  render() {
    console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={e => {
                    this.handleSearch( e.target.value)}} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.filteredPokemon()}/>
        <br />
        <PokemonForm addNewPokemon={this.addPokemonToPage}/>
      </div>
    )
  }
}

export default PokemonPage
