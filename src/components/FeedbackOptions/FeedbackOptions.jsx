import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div className={css.feedback}>
      {options.map(item => (
        <button
          name={item}
          onClick={onLeaveFeedback}
          className={css.btn}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};