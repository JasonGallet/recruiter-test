import React, { Component } from 'react';
import BootTimelineContainer from './packages/Timeline/Containers/BootTimelineContainer';
import {BootTimelineStore} from "./packages/Timeline/BootTimelineStore";

const btStore = new BootTimelineStore();


class App extends Component {
  state = {
    valueCurrent: 0,
  };

  render() {
    return (
      <div className="App">
        <BootTimelineContainer valueCurrent={this.state.valueCurrent}/>
      </div>
    );
  }
}

export default App;
