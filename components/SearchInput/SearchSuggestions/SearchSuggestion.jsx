import classNames from "classnames/bind";

// styles
import styles from "./SearchSuggestions.module.scss";

const cx = classNames.bind(styles);

const SearchSuggestion = ({ setSearchTerm, value, wrapperClass, children }) => {
	const handleClick = (event) => {
		setSearchTerm(event.target.dataset.value);
		if (!event.target.dataset.value) event.target.parentElement.click();
	}

	return (
		<div
			className={cx("search-suggestion", wrapperClass)}
			data-value={value}
			onClick={handleClick}
		>
			{children}
		</div>
	)
}

export default SearchSuggestion;