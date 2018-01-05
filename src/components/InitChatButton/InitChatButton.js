import React, { Component } from 'react';
import { connect } from 'react-redux';

class InitChatButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="init-chat-container">
        <button className="init-chat-btn">New Conversation</button>
      </div>
    );
  }
}

InitChatButton.displayName = 'InitChatButton';

const mapStateToProps = (state, props) => ({
  ...props,
  state
});

export default connect(mapStateToProps)(InitChatButton);
