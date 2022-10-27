import React from 'react';

import css from '../CountFeedback/CountFeedback.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div className={css.boxStatistics}>
    <p className={css.textGood}>Good: {good}</p>
    <p className={css.textNeutral}>Neutral: {neutral}</p>
    <p className={css.textBad}>Bad: {bad}</p>
    <p className={css.textTotal}>Total: {total}</p>
    <p className={css.textPositiveFeedback}>
      Positive feedback: {percentage} %
    </p>
  </div>
);

export default Statistics;
