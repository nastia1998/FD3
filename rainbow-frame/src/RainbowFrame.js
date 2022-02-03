const RainbowFrame = (props) => {
  let code = props.children;
  props.colors.forEach((color) => {
    code = <div style={{ border: `solid 5px ${color}` }}>{code}</div>;
  });
  return code;
};

export default RainbowFrame;
