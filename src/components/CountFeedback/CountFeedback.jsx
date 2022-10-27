import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './CountFeedback.module.css';
import Controls from '../Controls/Controls';
import Statistics from '../Statistics/Statistics';
// import Section from '../Section/Section';
import Notification from '../Notification/Notification';

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
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  clickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  clickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  clickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  // console.log('Hello');

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
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>Please leave feedback</h2>
        <Controls
          onGood={this.clickGood}
          onNeutral={this.clickNeutral}
          onBad={this.clickBad}
        />
        <h2 className={css.title}>Statistics</h2>
        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </section>
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
