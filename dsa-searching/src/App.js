import React from 'react';
import './App.css';

const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

// function binarySearch(array, value, start, end) {
//   var start = start === undefined ? 0 : start;
//   var end = end === undefined ? array.length : end;

//   if (start > end) {
//       return -1;
//   }

//   const index = Math.floor((start + end) / 2);
//   const item = array[index];

//   console.log(start, end);
//   if (item == value) {
//       return index;
//   }
//   else if (item < value) {
//       return binarySearch(array, value, index + 1, end);
//   }
//   else if (item > value) {
//       return binarySearch(array, value, start, index - 1);
//   }
// };

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      message: '',
      counter: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleLinearSearch = () => {
    let num = parseInt(this.state.input);
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
      counter++;
      if (data[i] === num) {
        this.setState({
          counter: counter,
          message: `It took ${counter} step(s) to find`
        })
        return;
      }
    }
    this.setState({
      message: `Input not found`
    })
  }

  handleBinarySearch = async () => {
    await this.setState({
      counter: 0
    })
    const sorted = data.sort((a, b) => {
      return a - b;
    });
    console.log(sorted);
    let index = this.binarySearch(sorted, this.state.input);
    console.log(`index: ${index}`);
    if (index === -1) {
      this.setState({
        message: `Input not found`
      })
    } else {
      this.setState({
        message: `It took ${this.state.counter} step(s) to find`
      })
    }
  }

  binarySearch = (array, value, start, end) => {
    this.setState({
      counter: this.state.counter + 1
    })
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    if (value > array[end - 1] || value < array[0]) {
      return -1;
    }
  
    if (start > end) {
        return -1;
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    console.log(index);
  
    console.log(start, end);
    if (item === value) {
        return index;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1);
    }
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} type="text" value={this.state.input}></input>
        <button onClick={this.handleLinearSearch}>Linear Search</button>
        <button onClick={this.handleBinarySearch}>Binary Search</button>
        <div>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;