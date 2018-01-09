import React, { Component } from 'react';
import { connect } from 'react-redux';

class InitChatButton extends Component {
  constructor(props) {
    super(props);
  }

  getButtonText() {
    const { chatSessionStarted } = this.props;

    return chatSessionStarted ? 'Continue your conversation' : 'New Conversation';
  }

  render() {
    const { onClick } = this.props;

    return (
      <div className="init-chat-container">
        <button className="init-chat-btn" onClick={onClick}>{this.getButtonText()}</button>
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
