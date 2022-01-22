const RainbowFrame = (props) => {
  return (
    <div>
      {props.colors.map((color) => {
        return (
          <div style={{ border: "solid 5px " + color }}>{props.children}</div>
        );
      })}
    </div>
  );
};

export default RainbowFrame;
