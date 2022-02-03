import "./BR2JSX.css";

const BR2JSX = (props) => {
  const regex = /<br *\/?>/i;
  let words = props.text.split(regex);
  let parts = [];
  words.forEach((word, i) => {
    if (i) {
      parts.push(<br key={i} />);
    }
    parts.push(word);
  });
  return <div>{parts}</div>;
};

export default BR2JSX;
