import React, {Component} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailGetMailBody} from '../../../actions/eve-mail';
import EveMailHeader from './eve-mail-header';
import EveMailItem from './eve-mail-item';
import Compose from './eve-mail-compose';

class EveMailHeaderList extends Component {
  constructor() {
    super();
    this.state = {
      JsxheaderList: null
    };
  }
  componentDidMount() {
    let headerList = [];
    this.props.mailHeaders.forEach((ele, ind) => {
      headerList.push(
        <EveMailHeader
          key={ind}
          header={ele}
        />
      );
    });
    this.setState({JsxheaderList: headerList});
  }
  render() {
    let display;
    switch (this.props.mailHeaderDisplay) {
    case 'headers':
      display = this.state.JsxheaderList;
      break;
    case 'mail':
      display = (
        <EveMailItem
          subject={this.props.mailRead.subject}
          from={this.props.mailRead.from}
          body={this.props.mailRead.body}
        />
      );
      break;
    case 'compose':
      display = (
        <Compose/>
      );
    }
    if (this.props.mailHeaderDisplay == 'mail') {
      display = (
        <EveMailItem
          subject={this.props.mailRead.subject}
          from={this.props.mailRead.from}
          body={this.props.mailRead.body}
        />
      );
    } else if (this.props.mailHeaderDisplay == 'headers'){
      display = this.state.JsxheaderList;
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailGetMailBody}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    characterId: state.eveMail.characterId,
    accessToken: state.eveMail.accessToken,
    mailHeaders: state.eveMail.mailHeaders,
    mailHeaderDisplay: state.eveMail.mailHeaderDisplay,
    mailRead: state.eveMail.mailRead
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMailHeaderList);
