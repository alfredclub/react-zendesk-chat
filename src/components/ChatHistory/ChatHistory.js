import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './../Avatar';
import ActionButton from './../ActionButton/ActionButton';
import zChat from './../../../vendor/web-sdk';

class ChatHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatsLoaded: 0
    };

    this.loadMessages = this.loadMessages.bind(this);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
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

  handlePreviewClick(chat) {
    this.props.onHistoryLoad();

    const storedChat = this.props.historyChats[chat.id];

    if (storedChat) {
      this.loadMessages(storedChat);
    }

    fetch(chat.url, {
      credentials: false,
      headers: {
        'X-Auth-Token': this.props.requestToken,
        Accept: 'application/vnd.alfredclub.v1+json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(chat => {
        this.props.dispatch({
          type: 'history_chats',
          detail: { id: chat.id, messages: chat }
        });

        return chat;
      })
      .then(this.loadMessages);
  }

  isAgentMsg(chat, name) {
    return chat.agent_names.indexOf(name) > -1;
  }

  loadMessages(chat) {
    this.props.onHistoryLoaded();

    chat.history.forEach(detail =>
      this.props.dispatch({
        type: 'chat',
        detail: {
          ...detail,
          nick: this.isAgentMsg(chat, detail.name)
            ? `agent:${detail.name}`
            : 'visitor',
          display_name: detail.name
        }
      })
    );
  }

  renderPreviews() {
    const { chats } = this.props.history;

    return chats.map((chat, index) => (
      <div
        className="preview"
        key={`preview_${index}`}
        onClick={() => this.handlePreviewClick(chat)}
      >
        <div className="preview-text">
          <div className="chat-msg-container visitor">
            <div className="avatar-container visitor">
              <Avatar entity={{ ...this.props.visitor, nick: '' }} />
            </div>
          </div>

          <span>{chat.preview}</span>
        </div>
      </div>
    ));
  }

  render() {
    return <div className="history">{this.renderPreviews()}</div>;
  }
}

const mapStateToProps = ({ history, historyChats, visitor }, props) => ({
  ...props,
  history,
  historyChats,
  visitor
});

export default connect(mapStateToProps)(ChatHistory);
