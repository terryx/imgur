'use strict';

import React from 'react';
import http from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '<div>Initializing app...</div>'
    };
  }

  componentDidMount() {
    http.get('https://api.imgur.com/oauth2/authorize?response_type=token&client_id=b1152779c6431f7&state=login')
      .then((response)=>{
        this.setState({
          view: response.data
        })
      })
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.state.view }} />
    )
  }
}

export default Login;
