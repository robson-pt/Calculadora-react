import "./Button.css";

export const Button = ({ value, styles, getCurrentValue }) => {
  return (
    <button
      className={styles}
      onClick={() => {
        getCurrentValue(value);
      }}
    >
      {value}
    </button>
  );
};
