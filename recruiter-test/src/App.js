import React, { Component } from 'react';
import BootTimelineContainer from './packages/Timeline/Containers/BootTimelineContainer';
import BootTimelineController from './packages/Timeline/Controller/BootTimelineController';

class App extends Component {
  render() {
    const btController = new BootTimelineController();
    btController.setBtBarColor('green');
    btController.setBtValueCurrentOnValueMax(false);
    btController.setBtValueCurrent(25);
    return (
      <div className="App">
        <BootTimelineContainer store={ btController.getBtStore() } service={btController.getBtService()}/>
      </div>
    );
  }
}

export default App;
