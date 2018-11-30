import React, { Component } from 'react';
import BootTimelineController from './packages/Timeline/Controller/BootTimelineController';
import TestContainer from './packages/Timeline/Containers/TestContainer';

class App extends Component {
  render() {
    const btController = new BootTimelineController();
    return (
      <div className="App">
          { btController.render() }
          <button onClick={ btController.incrementBtLine }> + </button>
          <button onClick={ btController.decrementBtLine }> - </button>
          <TestContainer BootTimeline={ btController }/>
      </div>
    );
  }
}

export default App;
