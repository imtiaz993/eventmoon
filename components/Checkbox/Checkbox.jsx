import classNames from "classnames/bind";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);


const Checkbox = ({wrapperClass, ...rest}) => {
	return (
		<div className={cx("custom-checkbox", wrapperClass)}>
			<input type="checkbox" {...rest}/>
			<span className={cx("mark")}></span>
		</div>
	)
}

export default Checkbox;