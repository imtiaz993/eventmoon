import classNames from "classnames";
import { useState } from "react";

const CustomSelect = ({options, wrapperClass, optionClass, selectedClass,handleChange}) => {
	const [selectedOption, setSelectedOption] = useState(options[0].value || options[0]);

	const handleSelect = (event) => {
		setSelectedOption(event.target.dataset.option);
		handleChange(event.target.dataset.option)
	}

	return (
		<div className={wrapperClass}>
			{options.map(
				(option, i) =>
					<div
						className={classNames(optionClass, {[selectedClass]: (option.value || option) === selectedOption})}
						key={i.toString()}
						data-option={option.value || option}
						onClick={handleSelect}
					>
						{
							option.value
							? <>
								<span>{option.value}</span>
								{option.suffix}
							</>
							: option
						}
					</div>
			)}
		</div>
	)
}

export default CustomSelect;