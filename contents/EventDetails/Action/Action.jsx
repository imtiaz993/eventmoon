// libraries
import classNames from "classnames/bind";

// styles
import styles from "./Action.module.scss";

const cx = classNames.bind(styles);

const Action = ({ ticket, title, buttonTitle, buttonIcon }) => {
  return (
    <div className={cx("action")}>
      <div>
        {ticket && (
          <h6>
            Ticket from / <span>${ticket}</span>
          </h6>
        )}
        <p>{title}</p>
      </div>
      <button>
        {buttonTitle}
        {buttonIcon}
      </button>
    </div>
  );
};

export default Action;
