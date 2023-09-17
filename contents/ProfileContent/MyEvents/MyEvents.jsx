import classNames from "classnames/bind";

// components
import { EventItem, Heading } from "components";

import styles from "./MyEvents.module.scss";
const cx = classNames.bind(styles);

const MyEvents = ({ className, heading = "My Events", count = 1 }) => {
  return (
    <div className={cx("my-events-root", className)}>
      <Heading title={heading} />
      <div className={cx("events-wrapper")}>
        {Array.from(Array(count)).map((_, i) => (
          <EventItem key={i.toString()} />
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
