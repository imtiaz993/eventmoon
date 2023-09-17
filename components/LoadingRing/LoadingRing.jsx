import classNames from "classnames/bind";

// styles
import styles from "./LoadingRing.module.scss";

const cx = classNames.bind(styles);

const LoadingRing = () => {
	return (
		<div className={cx("lds-ring")}><div></div><div></div><div></div><div></div></div>
	)
}

export default LoadingRing;