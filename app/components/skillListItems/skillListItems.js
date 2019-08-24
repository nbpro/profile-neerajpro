import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';
const SkillListItems = ({ item }) => (
  <div className="container">
    <div className="column is-center">
      <h1 className="title is-6">{item.heading}</h1>
      <p className="description">
        {item.description}
      </p>
    </div>
  </div>
);

SkillListItems.propTypes = {
  item: PropTypes.any
};

export default SkillListItems;
