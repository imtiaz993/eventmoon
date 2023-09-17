import classNames from "classnames/bind";

// styles
import styles from "./Pill.module.scss";

const cx = classNames.bind(styles);

const Pill = ({
  label,
  labelClass,
  wrapperClass,
  Prefix,
  prefixClass,
  position = "top-left",
  space = "0.5rem",
}) => {
  const options = {
    "top-left": {
      top: space,
      left: space,
    },
    "top-right": {
      top: space,
      right: space,
    },
    "top-center": {
      top: space,
      left: "50%",
      transform: "translate(-50%, 0)",
    },
    "bottom-left": {
      bottom: space,
      left: space,
    },
    "bottom-right": {
      bottom: space,
      right: space,
    },
    "bottom-center": {
      bottom: space,
      left: "50%",
      transform: "translate(-50%, 0)",
    },
    center: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className={cx("pill", wrapperClass)} style={options[position]}>
      {Prefix && <span className={cx(prefixClass)}>{Prefix}</span>}
      <span>{label}</span>
    </div>
  );
};

export default Pill;
