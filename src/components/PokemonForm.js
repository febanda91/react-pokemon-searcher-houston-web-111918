import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  addNewPokemon = () => {
    
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: this.state.name,
        stats: [{name:"hp", value: this.state.hp}],
        sprites: {front: this.state.frontUrl, back: this.state.backUrl}
      })
    })
    .then(res => res.json())
    .then(pokemon => this.props.addNewPokemon(pokemon))
      
    }



    handleSubmit(event){

      this.setState({
          name: event.target.name.value,
          hp: event.target.hp.value,
          frontUrl: event.target.frontUrl.value,
          backUrl: event.target.backUrl.value
      }, () => this.addNewPokemon())  // because setState is Async function(we need to set setState first then add that Pokemon)
      

     
    }
  


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
