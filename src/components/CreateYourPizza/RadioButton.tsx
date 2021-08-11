interface RadioButtonProps {
  name: string;
  value: string;
  id: string;
  text: string;
  func: () => void;
  checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({name, value, id, text, func, checked}) => {
  return (
    <div className="button">
      <input type="radio" name={name} value={value} id={id} onClick={func} defaultChecked={checked} />

      <label htmlFor={id}>
        <span>{text}</span>
      </label>
    </div>
  );
};

export default RadioButton;
