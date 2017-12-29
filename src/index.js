import React, { Component } from 'react';
import Widget from './components/ChatWidget';
import { Provider } from 'react-redux'
import ChatStore from './stores/ChatStore';
import zChat from './../vendor/web-sdk';

export class ZendeskChat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    zChat.init({
      account_key: this.props.accountKey
    });

    this.setVisitorInfo();
  }

  setVisitorInfo() {
    if (this.props.visitor) {
      const { name, email, phone } = this.props.visitor;

      zChat.setVisitorInfo({
        email, display_name: name, phone
      });
    }
  }

  render() {
    return (
      <Provider store={ChatStore}>
	      <Widget {...this.props}/>
	    </Provider>
    );
  }
}
