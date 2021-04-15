import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  // children is a reserved name, and its value is the content 
  // between the opening and closing tags of your custom component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
