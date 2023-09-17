import classNames from "classnames/bind";

// styles
import styles from "./BlogSlider.module.scss";

// components
import { Slider, BlogItem } from "components";

// hooks
import { useBlogsList } from "hooks";

const cx = classNames.bind(styles);

const BlogSlider = () => {
  const { data: blogList, isLoading, error } = useBlogsList();

  return (
    <div className={cx("swiper-slider-wrapper", "blog-slider-root")}>
      <h1 className={cx("heading")}>
        {`How to Find Small Local live music\nEvents in Your Area.`}
      </h1>
      <Slider
        list={isLoading || !blogList || error ? Array(4).fill({}) : blogList}
        Item={BlogItem}
        wrapperClass={cx("custom-slider-btn-wrapper")}
        space={16}
        perView={1}
        center={false}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // 1300: {
          //   slidesPerView: 3,
          //   spaceBetween: 52,
          // },
        }}
      />
    </div>
  );
};

export default BlogSlider;
