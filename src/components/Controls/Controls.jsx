import React from 'react';

import css from '../CountFeedback/CountFeedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.boxButton}>
    <button className={css.btnGood} name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button className={css.btnNeutral} name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button className={css.btnBad} name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
