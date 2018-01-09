'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatusContainer extends Component {
  constructor(props) {
    super(props);

    this.getStatusText = this.getStatusText.bind(this);
  }

  renderIcon() {
    const isString = typeof this.props.icon === 'string';
    return <div className="card-icon">{!isString && this.props.icon}</div>;
  }

  isDisplayingChatContent() {
    return this.props.accountStatus !== 'conversations';
  }

  getStatusText(status) {
    switch (status) {
      case 'conversations':
        return 'Conversations!';
      case 'conversation_history':
        return 'Conversation History!';
      case 'online':
        return 'We\'re online!';
      case 'offline':
        return 'Leave us a message';
      case 'away':
        return 'We\'re away!';
      default:
        return 'Connecting...';
    }
  }

  render() {
    return (
      <div className="status-container">
        {this.isDisplayingChatContent() && (
          <div className="back-arrow-container" onClick={this.props.onBackClick}>
            <div className="back-arrow" />
          </div>
        )}

        {this.getStatusText(this.props.accountStatus)}

        <div className="minimize-button" onClick={this.props.minimizeOnClick}>
          <div className="minimize-button-bar" />
        </div>
      </div>
    );
  }
}

StatusContainer.displayName = 'StatusContainer';
StatusContainer.propTypes = {
  accountStatus: PropTypes.string,
  minimizeOnClick: PropTypes.func
};
export default StatusContainer;
