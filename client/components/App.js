import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Errors from './Errors';
import Modals from './Modals';
import Fragments from './Fragments';

class App extends Component {
  render() {
    return (
      <div style={{ overflow: 'hidden', marginTop: '20px', marginLeft: '50px' }}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/errors" component={Errors} />
                <Route exact path="/portals" component={Modals} />
                <Route exact path="/fragments" component={Fragments} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;