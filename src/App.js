import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
  const randomNumber = Math.floor(Math.random()*(10000-1)+1);
   super(props)
   this.state = {
     number: randomNumber,
     userNumber: '',
     message: 'Wprowadź liczbę'
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.success = this.success.bind(this);
   this.failure = this.failure.bind(this);
  }

  handleChange(event) {
     this.setState({userNumber: event.target.value});
   }

   handleSubmit(event) {
    this.state.userNumber == this.state.number ? this.success() : this.failure();
    event.preventDefault();
  }

  success(){
    this.setState({message: 'Trafiłeś!'})
  }

  failure(){
    const failureMessage = this.state.userNumber > this.state.number ? 'Szukana liczba jest mniejsza' : 'Szukana liczba jest większa';
    this.setState({message: failureMessage});
  }

  render() {
    return (
      <div className="App">
        {this.generateNubmer}
        <div className="App-header">
          <h2>Serwer wylosował liczbę od 1 do 10000. Spróbuj ją odgadnąć!</h2>
          <h4>Podpowiedź: {this.state.number}</h4>
        </div>
        <p className="App-hint">
          {this.state.message}
        </p>
        <div className="">
          <form onSubmit={this.handleSubmit}>
            <input type="number" onChange={this.handleChange}/>
            <input type="submit" value="Sprawdź!" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
