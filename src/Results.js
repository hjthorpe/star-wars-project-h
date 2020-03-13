import React from 'react';

class Results extends React.Component{

  constructor(){
    super();
    this.state = {
      person: null
    }
  }


  async componentDidMount(){
    const url = "https://swapi.co/api/people/"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results});
  }

  render(){
    return (
      <div>hello</div>
    )
  }


}


export default Results;