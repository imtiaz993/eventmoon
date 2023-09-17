import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";

// styles
import styles from "./Accordion.module.scss";

const cx = classNames.bind(styles);

function Accordion({ header, children }) {
  const [hidden, setHidden] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState("auto");
  const bodyRef = useRef(null);
  useEffect(() => {
    if (bodyRef.current) {
      const computedStyles = window.getComputedStyle(bodyRef.current);
      setAccordionHeight(computedStyles.height);
      setHidden(true);
    }
  }, []);
  function handleClick() {
    setHidden((hidden) => !hidden);
  }
  return (
    <div className={cx("accordion-root")}>
      <div className={cx("header")} onClick={handleClick}>
        {header}
      </div>
      <div
        ref={bodyRef}
        className={cx("body")}
        style={{ height: hidden ? "0" : accordionHeight }}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
