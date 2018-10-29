import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Col, Button, Input } from 'antd';

// actions
import { signup, signin } from '../actions/auth.action'


class Auth extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    surname: '',
    mode: 'signin',
    oppMode: 'New User? Signup here!'
  }

  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    return false;
  }

  switchMode= checked => {
    let mode, oppMode;
    if (checked) {
      mode = 'signin';
      oppMode = 'signup';
    } else {
      mode = 'signup';
      oppMode = 'signin';
    }
    this.setState({ mode, oppMode });
    return false;
  }

  renderSignIn = () => {
    const { email, password } = this.state;
    return (
      <form className="auth-form">
        <Input
          placeholder="E-mail address" value={email} name="email"
          onChange={this.handleTextChange}
        />
        <Input
          placeholder="password" value={password} type="password"
          name="password"  onChange={this.handleTextChange}
        />
        <Button size="large" type="primary">SIGN IN</Button>
      </form>
    );
  }

  render() {
    return (
      <Fragment>
        <Col span={6}>
          {this.renderSignIn()}
        </Col>
        <Col span={18} className="auth-wrapper" />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  userSignup: (payload) => dispatch(signup(payload)),
  userSignin: (payload) => dispatch(signin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
