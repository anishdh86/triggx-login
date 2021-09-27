import './Button.scss';

const Button = (props) => {
  return (
    <button
      className={'btn ' + props.classes}
      type={props.type}
      id={props.buttonId}
      disabled={props.disabled}>
      {props.text}
    </button>
  );
}

export default Button;