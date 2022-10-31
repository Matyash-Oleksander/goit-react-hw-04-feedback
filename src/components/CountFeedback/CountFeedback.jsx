import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import css from './CountFeedback.module.css';
import FeedbackOptions from '../Controls';
import Statistics from '../Statistics';
import Section from '../Section/Section';
import Notification from '../Notification';

class StateChangeFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  clickButton = evt => {
    this.setState(prevState => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.bad + this.state.neutral + this.state.good)) *
      100
    );
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickButton}
          />
        </Section>
        <Section title="Statistics">
          {this.countPositiveFeedbackPercentage() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </>
    );
  }
}

// export const CountFeedback = () => {
//   return (
//     <section className={css.statistics}>
//       <h2 className={css.title}>Please leave feedback</h2>
//       <div className={css.boxButton}>
//         <button className={css.btnGood} onClick={this.clickGood}>Good
//           <span>{ this.state.good}</span>
//         </button>
//         <button className={css.btnNeutral}>Neutral</button>
//         <button className={css.btnBad}>Bad</button>
//       </div>
//       <h2 className={css.title}>Statistics</h2>
//       <div className={css.boxStatistics}>
//         <span className={css.textGood}>Good:</span>
//         <span className={css.bextNeutral}>Neutral:</span>
//         <span className={css.textBad}>Bad:</span>
//         <span className={css.bextTotal}>Total:</span>
//         <span className={css.textPositiveFeedback}>Positive feedback:</span>
//       </div>
//     </section>
//   );
// };

export default StateChangeFeedback;
