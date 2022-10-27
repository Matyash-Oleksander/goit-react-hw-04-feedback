import React from 'react';

import css from '../CountFeedback/CountFeedback.module.css';

const Controls = ({ onGood, onNeutral, onBad }) => (
  <div className={css.boxButton}>
    <button className={css.btnGood} onClick={onGood}>
      Good
    </button>
    <button className={css.btnNeutral} onClick={onNeutral}>
      Neutral
    </button>
    <button className={css.btnBad} onClick={onBad}>
      Bad
    </button>
  </div>
);

export default Controls;
