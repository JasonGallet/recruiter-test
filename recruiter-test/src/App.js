import React, { Component } from 'react';
import BootTimelineContainer from './packages/Timeline/Containers/BootTimelineContainer';
import {BootTimelineStore} from "./packages/Timeline/BootTimelineStore";

const btStore = new BootTimelineStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootTimelineContainer store={ btStore }/>
      </div>
    );
  }
}

export default App;
