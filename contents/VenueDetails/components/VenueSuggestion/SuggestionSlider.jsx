import classNames from "classnames/bind";

import { Heading, Slider } from "components";
import VenueSuggestion from "./VenueSuggestion";

import styles from "./VenueSuggestion.module.scss";
const cx = classNames.bind(styles);

const SuggestionSlider = ({ className, heading, count = 1 }) => {
  return (
    <div className={cx(className)}>
      <Heading title={heading} to="#" />
      <Slider
        list={[...new Array(count).fill({})]}
        Item={VenueSuggestion}
        wrapperClass={cx("venue-slider-wrapper")}
        slideClass={cx("max-w")}
        space={16}
        perView="auto"
        perGroup={1}
        navigation={count > 1}
        center
        breakpoints={{
          640: {
            centeredSlides: false,
          },
          768: {
            spaceBetween: 24,
            centeredSlides: false,
          },
        }}
      />
    </div>
  );
};

export default SuggestionSlider;
