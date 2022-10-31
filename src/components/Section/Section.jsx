import React from 'react';
import css from '../CountFeedback/CountFeedback.module.css';

const Section = ({ children }) => (
  <section className={css.statistics}>{children}</section>
);

export default Section;
