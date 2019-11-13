const DigitalDisplay = function (props) {
  let dateStr = props.time.toString();
  return React.createElement(
    "div",
    null,
    dateStr
  );
};