import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

const Skills = ({ component, items }) => {
  const ComponentToRender = component;
  let content = (<div></div>);

  // If we have items, render them
  if (items) {
    content = items.map((item) => (
      <ComponentToRender key={`item-${item.id}`} item={item.details} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }
  return (
    <div className="column">
      <div className="container">
        {content}
      </div>
    </div>
  );
};

Skills.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};
export default Skills;
