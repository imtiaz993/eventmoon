import classNames from "classnames/bind";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const ControlGroup = ({ children }) => {
	return (
		<div className={cx("control-group")}>
			{children}
		</div>
	)
}

export default ControlGroup;