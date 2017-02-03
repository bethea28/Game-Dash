import React, { Component } from 'react';
import axios from 'axios';

class EveToken extends Component {
  constructor(props){
    super(props);
    let url = window.location.href;
    let token = url.slice(url.indexOf('=') + 1, url.indexOf('&'));
    this.state = {
      token: token,
      authToken: null,
      refreshToken: null,
      characterId: 1948822847
    };
  }
  componentDidMount(){
    axios.post('/api/fetchAuthorizationCode', {
      token: this.state.token
    }).then((data) => {
      this.setState({authToken: data.data.access_token, refreshToken: data.data.refresh_token});
    })
    .then(() => {

    })
    .catch((err) => {
      alert(err);
    });
  }
  handleClick(){

  }
  render(){
    let screen = "Loading...";
    if (this.state.authToken) {
      screen = (
        <div>
          {this.props.children}
        </div>
      );
    }
    return (
      <div>
        {screen}
      </div>
    );
  }
}

export default EveToken;
