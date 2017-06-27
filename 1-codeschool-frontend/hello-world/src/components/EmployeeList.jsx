import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  employeeNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  employeeNames: [],
};

const NameList = ({ employeeNames, onClick }) => (
  <div className="name-list">
    <ul>
      {employeeNames.map((employeeName, index) => {
        const { name, id } = employeeName;
        return (
          <li
            key={id}
            value={index}
            onClick={onClick}
          >
            {name}
          </li>
        );
      })}
    </ul>
  </div>
);

NameList.propTypes = propTypes;
NameList.defaultProps = defaultProps;

export default NameList;
