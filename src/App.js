import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }
  // sets up 9 bins and calls them to be changed every 1.5s

  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }
    return bins;
  }
  // returns the state of each bin in the array t if theres trash and f if not

  onTrashClicked = (index) => {
    let updatedBins = this.state.bins;

    updatedBins[index].present = true
    let points = this.state.points
    this.setState( {
    points: points+=1
  });
  }

  render() {

    let bins = this.state.bins.map((bin, index) => {
      return (
        <Trash key={`trash-${index}`} trashPresent={bin.isTrashVisible} trashClicked={this.onTrashClicked} index={index}/>
      );
    });

    return (
      <div className="App">
      <section className="overall-data">
      <h1>Litter Patrol</h1>
      <h2>Points: { this.state.points }</h2>
      </section>

      <section className="bins">
      { bins }
      </section>
      </div>
    );
  }
}

export default App;
