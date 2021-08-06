interface RadioButtonProps {
  name: string;
  value: string;
  id: string;
  text: string;
  func: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({name, value, id, text, func}) => {
  return (
    <div className="button">
      <input type="radio" name={name} value={value} id={id} onClick={func} />

      <label htmlFor={id}>
        <div className="background"></div>
        <span>{text}</span>
      </label>
    </div>
  );
};

export default RadioButton;
