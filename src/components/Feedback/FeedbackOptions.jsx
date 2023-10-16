import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => (
                <button   
                    key={option}
                    type="button"
                    name={option}
                    className={css.btn}
                    onClick={() => onLeaveFeedback(option)}
                > 
    
                    {option}
                </button>
            ))}
        </div>
    ); 
};