'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ChatMessage from './../ChatMessage';
import SystemMessage from './../SystemMessage';
import Avatar from './../Avatar';
import OfflineForm from './../OfflineForm';
import PrechatForm from './../PrechatForm';
import ChatRating from './../ChatRating';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.renderTyping = this.renderTyping.bind(this);
    this.renderByType = this.renderByType.bind(this);
  }

  componentDidUpdate() {
    // Scroll to bottom
    let node = ReactDOM.findDOMNode(this);
    if (node.children.length > 0) {
      node = node.children[0];
      if (node.children.length > 0) {
        setTimeout(() => {
          node.children[node.children.length - 1].scrollIntoView();
        });
      }
    }
  }

  renderByType(msg, addClass) {
    switch (msg.type) {
      case 'chat.file':
      case 'chat.msg':
        return (
          <ChatMessage
            key={msg.type + msg.timestamp}
            message={msg}
            addClass={addClass}
            agent={this.props.agents[msg.nick]}
          />
        );
      case 'chat.memberjoin':
      case 'chat.memberleave':
      case 'chat.wait_queue':
      case 'typing':
        return <SystemMessage key={msg.type + msg.timestamp} message={msg} />;
      case 'chat.rating':
        return <ChatRating key={msg.type + msg.timestamp} />;
      case 'offline':
        return <OfflineForm key="offline" />;
      case 'prechat':
        return <PrechatForm key="prechat" />;
      default:
        return (
          <div key={+new Date()}>Unhandled message: {JSON.stringify(msg)}</div>
        );
    }
  }

  renderTyping(agents) {
    const agent_names = Object.values(agents).filter(agent => agent.typing);
    return agent_names.map(agent => {
      return (
        <div key={agent.nick} className="chat-msg-container agent">
          <div className="avatar-container">
            <Avatar entity={this.props.agents[agent.nick]} />
          </div>
          <div className="chat-msg-wrapper">
            <div className="chat-msg">
              <div className="typing-indicator">
                <div className="typing-indicator-part">•</div>
                <div className="typing-indicator-part">•</div>
                <div className="typing-indicator-part">•</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderAll(isOffline, messages) {
    let allMessages = [...messages];

    if (isOffline) {
      allMessages = [];
      allMessages.push({
        type: 'chat.msg',
        display_name: 'Chat Agent',
        nick: 'agent:offline',
        timestamp: +new Date(),
        member_type: 'agent',
        msg:
          'Sorry, we are offline at the moment. Please leave us your contact information and we will get back to you soon!'
      });
      allMessages.push({
        type: 'offline'
      });
    } else if (!this.props.isChatting) {
      allMessages = [
        {
          type: 'prechat'
        }
      ];
    }

    let prev = null;

    return allMessages.map(message => {
      let addClass = '',
        currentNick = message.nick,
        prevNick = prev && prev.nick;

      if (
        prev &&
        prev.type === message.type &&
        currentNick &&
        currentNick === prevNick
      )
        addClass = 'sibling';

      prev = message;

      return this.renderByType(message, addClass);
    });
  }

  render() {
    return (
      <div className="message-list-container">
        <div>{this.renderAll(this.props.isOffline, this.props.messages)}</div>
        {this.renderTyping(this.props.agents)}
      </div>
    );
  }
}

MessageList.displayName = 'MessageList';
MessageList.propTypes = {
  messages: PropTypes.array,
  agents: PropTypes.object,
  isOffline: PropTypes.bool,
  isChatting: PropTypes.bool
};
MessageList.defaultProps = {
  messages: [],
  agents: {}
};

export default MessageList;
