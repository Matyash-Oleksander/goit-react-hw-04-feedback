import React from 'react';
import PropTypes from 'prop-types';
import css from '../CountFeedback/CountFeedback.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
};

export default Section;
