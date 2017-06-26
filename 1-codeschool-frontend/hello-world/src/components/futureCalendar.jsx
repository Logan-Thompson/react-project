import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  calendars: PropTypes.arrayOf([
    PropTypes.shape({
      months: PropTypes.arrayOf(PropTypes.string),
      daysOfWeek: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string,
      currentDate: PropTypes.string,
      datesOfEvents: PropTypes.arrayOf(
        PropTypes.shape({
          startDate: PropTypes.string,
          endDate: PropTypes.string,
        }),
      ),
    }),
  ]),
};

const defaultProps = {
  calendars: [],
};

class HomeView extends Component {
  state = {
    currentCalendar: this.props.calendars[0],
  }

  render() {
    return (
      <div>
        lol
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
