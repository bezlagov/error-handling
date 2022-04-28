import React, { Component } from 'react';

class Test extends Component {
  render() {
  throw new Error('our error');
   
   
    return (
      <div>
         <h1>Some data part 1</h1>
        <h1>Some data part 2</h1>
      </div>
    );
  }
}

export default Test;