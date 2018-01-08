import React, { Component } from 'react';
import { connect } from 'react-redux';

class InitChatButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;

    return (
      <div className="init-chat-container">
        <button className="init-chat-btn" onClick={onClick}>New Conversation</button>
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
