require('styles/Widget.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux'
import StatusContainer from './../StatusContainer';
import MessageList from './../MessageList';
import ChatButton from './../ChatButton';
import Input from './../Input';
import { log, get, set } from './../../utils';
import { debounce } from 'lodash';
import zChat from './../../../vendor/web-sdk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: this.props.theme,
      typing: false,
      visible: false
    };

    this.timer = null;
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getVisibilityClass = this.getVisibilityClass.bind(this);
    this.minimizeOnClick = this.minimizeOnClick.bind(this);
    this.chatButtonOnClick = this.chatButtonOnClick.bind(this);
    this.mapToEntities = this.mapToEntities.bind(this);
    this.isOffline = this.isOffline.bind(this);
    this.stopTyping = debounce(this.stopTyping.bind(this), 1000);
    this.setVisible = this.setVisible.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  componentDidMount() {
    zChat.init({
      account_key: this.props.accountKey
    });

    const events = [
      'account_status',
      'connection_update',
      'department_update',
      'visitor_update',
      'agent_update',
      'chat',
      'error'
    ];

    events.forEach((evt) => {
      zChat.on(evt, (data) => {
        this.props.dispatch({
          type: evt,
          detail: data
        });
      });
    });

    this.setState({
      visible: get('visible') || this.state.visible,
      theme: get('theme') || this.state.theme
    });
  }

  handleOnChange() {
    if (!this.state.typing) {
      zChat.sendTyping(true);
      this.setState({ typing: true });
    }
    this.stopTyping();
  }

  stopTyping() {
    if (!this.state.typing) return;

    zChat.sendTyping(false);
    this.setState({ typing: false });
  }

  handleOnSubmit(event) {
    event && event.preventDefault();

    // Don't allow visitor to send msg if not chatting
    if (this.isOffline()) return;

    const msg = this.refs.input.getRawInput().value;

    // Don't send empty messages
    if (!msg) return;

    // Immediately stop typing
    this.stopTyping.flush();

    zChat.sendChatMsg(msg, (err) => {
      if (err) {
        log('Error occured >>>', err);
        return;
      }
    });

    this.props.dispatch({
      type: 'synthetic',
      detail: {
        type: 'visitor_send_msg',
        msg
      }
    });
    this.refs.input.getRawInput().value = '';
  }

  handleFileUpload(event) {
    event.preventDefault();

    // Don't allow visitor to send file if offline
    if (this.isOffline()) return;

    // Only send the first file dropped on input
    const file = event.dataTransfer.files[0];

    // Generate attachment object for local echo
    const attachment = {
      mime_type: file.type,
      name: file.name,
      size: file.size,
      url: window.URL.createObjectURL(file)
    }

    zChat.sendFile(file, (err) => {
      if (err) {
        log('Error occured >>>', err);
        return;
      }
    });

    this.props.dispatch({
      type: 'synthetic',
      detail: {
        type: 'visitor_send_file',
        attachment
      }
    });
  }

  getVisibilityClass() {
    return this.state.visible ? 'visible' : '';
  }

  minimizeOnClick() {
    this.setVisible(false);
  }

  chatButtonOnClick() {
    this.setVisible(true);
  }

  setVisible(visible) {
    this.setState({
      visible
    });
    set('visible', visible);
  }

  mapToEntities(visitor, agents) {
    const entities = {};
    if (visitor) {
      entities[visitor.nick] = {
        ...visitor,
        type: 'visitor'
      };
    }

    if (agents && Object.keys(agents).length) {
      Object.values(agents).forEach((agent) => {
        if (!agent.nick) return;

        entities[agent.nick] = {
          ...agent,
          type: 'agent'
        };
      });
    }

    if (this.props.data.account_status === 'offline' && !this.props.data.is_chatting) {
      entities['agent:offline'] = {
        type: 'agent',
        nick: 'agent:offline'
      }
    }

    return entities;
  }

  isOffline() {
    return this.props.data.account_status === 'offline' && !this.props.data.is_chatting;
  }

  render() {
    const entities = this.mapToEntities(this.props.data.visitor, this.props.data.agents);
    const isOffline = this.isOffline();
    const { spinner } = this.props.styles;

    return (
      <div className="index">
        <div className={`widget-container normal ${this.getVisibilityClass()}`}>
          <StatusContainer
            accountStatus={this.props.data.account_status}
            minimizeOnClick={this.minimizeOnClick}
          />

          <MessageList
            isChatting={this.props.data.is_chatting}
            isOffline={isOffline}
            messages={this.props.data && this.props.data.chats.toArray()}
            agents={this.props.data.agents}
            entities={entities}
          />

          <div className={`spinner-container ${this.state.visible && this.props.data.connection !== 'connected' ? 'visible' : ''}`}
            styles={spinner}>
            <div className="spinner"></div>
          </div>

          <Input
            addClass={this.props.data.is_chatting ? 'visible' : ''}
            ref="input"
            onSubmit={this.handleOnSubmit}
            onChange={this.handleOnChange}
            onFocus={this.inputOnFocus}
            onFileUpload={this.handleFileUpload}
          />
        </div>

        <ChatButton addClass={this.getVisibilityClass()} onClick={this.chatButtonOnClick} />
      </div>
    );
  }
}

App.displayName = 'App';

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const WrappedApp = connect(
  mapStateToProps
)(App);

export default WrappedApp;
