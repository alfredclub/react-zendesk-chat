import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/ChatWidget';
import { Provider } from 'react-redux'
import ChatStore from './stores/ChatStore';

export const ZendeskChat = () => (
  <Provider store={ChatStore}>
	  <Widget />
	</Provider>
);
