import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './../Avatar';
import ActionButton from '../ActionButton/ActionButton';

class ChatHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatsLoaded: 0
    };
  }

  componentWillReceiveProps(props) {
    const { chats } = props.history;

    this.setState({
      chatsLoaded: chats.length
    });
  }

  shouldComponentUpdate(nextProps) {
    const { chats } = nextProps.history;

    return this.state.chatsLoaded !== chats.length;
  }

  renderPreviews() {
    const { chats } = this.props.history;

    return chats.map((chat, index) => (
      <div className="preview" key={`preview_${index}`}>
        <div className="preview-text">
          <div className="chat-msg-container visitor">
            <div className="avatar-container visitor">
              <Avatar entity={{ ...this.props.visitor, nick: '' }} className="" />
            </div>
          </div>

          <span>{chat.preview}</span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="history">
        {this.renderPreviews()}
      </div>
    );
  }
}

const mapStateToProps = ({ history, visitor }, props) => ({
  ...props,
  history,
  visitor
});

export default connect(mapStateToProps)(ChatHistory);
