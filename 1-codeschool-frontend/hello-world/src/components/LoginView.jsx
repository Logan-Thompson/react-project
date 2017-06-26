import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { USER_CREATE_REQ } from '../actions';

const propTypes = {
  users: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

const defaultProps = {
  users: [],
};

class LoginView extends React.Component {
  state = {
    currentUser: this.props.users[0],
  }

  onFieldChange = (event) => {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        [event.target.name]: event.target.value,
      },
    });
  }

  doLogin = () => {
    this.props.dispatch({
      type: USER_CREATE_REQ,
      user: this.state.currentUser,
    });
  }

  render() {
    return (
      <div>
        <input
          name="username"
          placeholder="Enter your username..."
          onChange={event => this.onFieldChange(event)}
        />
        <input
          name="password"
          placeholder="Enter your username..."
          onChange={event => this.onFieldChange(event)}
        />
        <button
          onClick={this.doLogin}
        >Login</button>
      </div>
    );
  }
}

LoginView.propTypes = propTypes;
LoginView.defaultProps = defaultProps;

function mapStateToProps(state) {
  console.log(state);
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(LoginView);
