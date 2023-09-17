import classNames from "classnames/bind";
import { useState } from "react";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const CustomSelect = ({selected,onChange,options}) => {
	const [index, setIndex] = useState(selected);

	const handleClick = (event) => {
		onChange(event.target.innerHTML)
		setIndex(event.target.innerHTML);
	}

	return (
		<div className={cx("custom-select")}>
			{options.map((option, i) => (
				<div className={cx("option", {"selected": option == index})} key={i.toString()} data-index={i.toString()} onClick={handleClick}>
					{option}
				</div>
			))}
		</div>
	)
}

export default CustomSelect;