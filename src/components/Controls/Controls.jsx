import React from 'react';
import { nanoid } from 'nanoid';
import css from '../CountFeedback/CountFeedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.boxButton}>
    {options.map(name => (
      <button
        key={nanoid()}
        className={css.btnGood}
        name={name}
        onClick={onLeaveFeedback}
      >
        {name}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
