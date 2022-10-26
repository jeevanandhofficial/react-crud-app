import { Component } from 'react'
//import Container from '@material-ui/core/Container';
//import Table1 from './Table';
import Table from './Table';
import Form from './Form';
import Navcom from './Navcom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';




class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = (index) => {
    const { characters } = this.state
    let filtered = characters.filter((character, i) => {
      return i !== index
    });
    this.setState({ characters: filtered });
  }
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })

  }
  render() {
    const { characters } = this.state

    return (

      <div className="App " >
        
        
        
            <Grid container spacing={4}>
          <Grid item xs={12}>
          <Navcom />
          </Grid>
        <Grid item xs={6}>
          <br></br>
          <h1>ENTER DETAILS OF EMPLOYEE TABLE </h1>
            <Form handleSubmit={this.handleSubmit} />
            </Grid>
          
            <br></br>
            <Grid item xs={6}>
            <br></br>

            <h1>EMPLOYEE TABLE </h1>
            <br></br>
            <Table removeCharacter={this.removeCharacter} charactersData={characters} />
            </Grid>
            </Grid>
            
            
        




      </div>

    )
  }
}
export default App;
