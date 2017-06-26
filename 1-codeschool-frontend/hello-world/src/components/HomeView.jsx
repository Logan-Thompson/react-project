import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { EMPLOYEE_CREATE_REQ } from '../actions';

const propTypes = {
  employees: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

const defaultProps = {
  employees: [],
};

class HomeView extends Component {
  state = {
    currentEmployee: this.props.employees[0],
  }

  onEmployeeChange = (event) => {
    const currentEmployee = {
      ...this.state.currentEmployee,
      [event.target.name]: event.target.value,
    };
    this.setState({ currentEmployee });
  }

  onItemCreate = (currentEmployee) => {
    this.props.dispatch({
      type: EMPLOYEE_CREATE_REQ,
      item: currentEmployee,
    });
    this.setState({ currentEmployee: { name: '' } });
  }

  onItemUpdate = (editEmployee) => {
    this.props.dispatch({
      type: EMPLOYEE_CREATE_REQ,
      item: editEmployee,
    });
    this.setState({ editEmployee: null });
  }

  onEditItemClick = (editEmployee) => {
    this.setState({ editEmployee });
  }

  onEditItemChange = (event) => {
    const { id } = this.state.editEmployee;
    const editEmployee = {
      name: event.target.value,
      id,
    };
    this.setState({ editEmployee });
  }

  onEditItemCheck = (editEmployee) => {
    this.onItemUpdate({ ...editEmployee, completed: true });
  }

  render() {
    const { currentEmployee } = this.state;
    return (
      <div>
        <div>
          <input
            name="name"
            placeholder="Name"
            onChange={event => this.onEmployeeChange(event)}
            value={currentEmployee ? currentEmployee.name : ''}
          />
          <button
            onClick={this.onItemCreate}
          >
            Add an employee...
          </button>
        </div>
        <div>
          <input
            name="position"
            placeholder="Position"
            onChange={event => this.onEmployeeChange(event)}
            value={currentEmployee ? currentEmployee.position : ''}
          />
        </div>
        <div>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={event => this.onEmployeeChange(event)}
            value={currentEmployee ? currentEmployee.phoneNumber : ''}
          />
        </div>
      </div>
    );
  }
}

HomeView.propTypes = propTypes;
HomeView.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(HomeView);
