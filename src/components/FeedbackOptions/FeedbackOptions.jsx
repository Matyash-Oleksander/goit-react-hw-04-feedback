import PropTypes from 'prop-types';
import css from '../CountFeedback/CountFeedback.module.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.boxButton}>
    {options.map(option => (
      <button
        className={css.btnGood}
        key={nanoid()}
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option.toUpperCase()}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
