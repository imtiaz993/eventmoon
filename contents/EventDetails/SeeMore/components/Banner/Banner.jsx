import classNames from "classnames/bind";

// styles
import styles from "./Banner.module.scss";

// components
import { Button } from "components";

const cx = classNames.bind(styles);

const Banner = ({
  SuffixIcon,
  PrefixIcon,
  title,
  btnLabel,
  priceLabel,
  rounded,
  handleClick,
}) => {
  return (
    <div className={cx("banner-root")}>
      <p className={cx("title-wrapper")}>
        {priceLabel && (
          <span className={cx("label")}>
            Ticket from / <i>${priceLabel}</i>
          </span>
        )}
        <span className={cx("title")}>{title}</span>
      </p>
      <Button
        wrapperClass={cx("rounded")}
        label={btnLabel}
        Suffix={SuffixIcon && <SuffixIcon />}
        Prefix={PrefixIcon && <PrefixIcon />}
      />
    </div>
  );
};

export default Banner;
