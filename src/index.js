import React, { Component } from 'react';
import Widget from './components/ChatWidget';
import { Provider } from 'react-redux'
import ChatStore from './stores/ChatStore';

export class ZendeskChat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={ChatStore}>
	      <Widget {...this.props}/>
	    </Provider>
    );
  }
}
