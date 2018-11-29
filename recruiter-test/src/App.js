import React, { Component } from 'react';
import BootTimelineContainer from './packages/Timeline/Containers/BootTimelineContainer';
import BootTimelineController from './packages/Timeline/Controller/BootTimelineController';
import TestContainer from './packages/Timeline/Containers/TestContainer';

class App extends Component {
  render() {
    const btController = new BootTimelineController();
    // btController.setBtBarColor('green');
    // btController.setBtValueCurrentOnValueMax(true);
    // btController.setBtValueCurrent(25);
    return (
      <div className="App">
        <BootTimelineContainer store={ btController.getBtStore() } service={ btController.getBtService() }/>
          Outside component refresh :
        <TestContainer bootTimeline={ btController }/>
      </div>
    );
  }
}

export default App;
