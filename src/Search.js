import React from 'react';

class Search extends React.Component{

  constructor(){
    super();
    this.state = {
      person: '',
      results: []
    }
  }


  async getResults(){
    const url = `https://swapi.co/api/people/?search=${this.state.person}`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({results: data.results[0].name});
    console.log(this.state.results);
  }


  handleChange = (event) => {
    this.setState({
      person: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getResults();
    console.log(this.state.person)
  }


  render(){
    const {person} = this.state.person
     return (
       <div>
      <div className="search" >
        <label htmlFor="search">Search:</label>
        <input type="text" value={person} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit} >Go!</button>
      </div>
      <div className="tempResult">
        {this.state.results}
      </div>
      </div>
    )
  }
}

export default Search;