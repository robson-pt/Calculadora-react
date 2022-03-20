import "./Display.css";

export const Display = ({ current, previews }) => {
  return (
    <div className="Display">
      <div data-previous-operand className="previous-operand">
        {previews}
      </div>
      <div data-current-operand className="current-operand">
        {current}
      </div>
    </div>
  );
};
