import React from 'react';

class Search extends React.Component{

  state = {
    person: ''
  }

  handleChange = (event) => {
    this.setState({
      person: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    
  }


  render(){
     return (
      <div className="search">
        <label htmlFor="search">Search:</label>
        <input type="text" value="" />
        <button  >Go!</button>
      </div>
    )
  }
}

export default Search;