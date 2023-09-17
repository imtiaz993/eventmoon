import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import classNames from "classnames/bind";
import { useIsMob } from "hooks";
// asses
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";

import styles from "./CategorySlider.module.scss";
const cx = classNames.bind(styles);

const CategorySlider = ({
  data,
  onChange,
  active,
  showCategory,
  setShowCategory,
}) => {
  // ref
  const scrollRef = useRef();
  const activeTagRef = useRef();
  const isMob = useIsMob(640);

  useEffect(() => {
    if (active && activeTagRef) {
      let offset = activeTagRef?.current?.getBoundingClientRect();
      if (offset) scroll([offset?.x - 120, offset?.x - 20]);
    }
  }, [active]);

  const scroll = (_offsets) => {
    let offset = 0;
    if (window.innerWidth > 640) {
      offset = _offsets[0];
    } else {
      offset = _offsets[1];
    }

    let x = scrollRef.current.scrollLeft + offset;
    scrollRef.current.scroll({ top: 0, left: x, behavior: "smooth" });
  };

  return (
    <div className={cx("category-slider-root")}>
      <div className={cx("flexbox")}>
        {/* <motion.span
          whileTap={{ scale: 0.9 }}
          className={cx('icon-wrapper', 'left-icon')}
          onClick={() => scroll([-400, -150])}
        >
          <IoChevronBackSharp />
        </motion.span> */}
        <div
          className={cx("list-wrapper", !showCategory ? "slide-wrapper" : "")}
          ref={scrollRef}
        >
          {data.map((item, index) =>
            !showCategory ? (
              !isMob ? (
                index < 5 && (
                  <span
                    ref={
                      item.Categoryid === active.Categoryid
                        ? activeTagRef
                        : null
                    }
                    key={index}
                    onClick={() => {
                      onChange(item);
                    }}
                    className={cx("category", {
                      active: item.Categoryid === active.Categoryid,
                    })}
                  >
                    {item.CategoryName}
                  </span>
                )
              ) : (
                index < data.length && (
                  <span
                    ref={
                      item.Categoryid === active.Categoryid
                        ? activeTagRef
                        : null
                    }
                    key={index}
                    onClick={() => {
                      onChange(item);
                    }}
                    className={cx("category", {
                      active: item.Categoryid === active.Categoryid,
                    })}
                  >
                    {item.CategoryName}
                  </span>
                )
              )
            ) : (
              <span
                ref={
                  item.Categoryid === active.Categoryid ? activeTagRef : null
                }
                key={index}
                onClick={() => {
                  onChange(item);
                }}
                className={cx("category", {
                  active: item.Categoryid === active.Categoryid,
                })}
              >
                {item.CategoryName}
              </span>
            )
          )}
        </div>
        {!showCategory && (
          <div className={cx("see-all")}>
            <p
              onClick={() => {
                setShowCategory(true);
              }}
            >
              see all
            </p>
          </div>
        )}
        {showCategory && (
          <div className={cx("see-all")}>
            <p
              onClick={() => {
                setShowCategory(false);
              }}
            >
              see less
            </p>
          </div>
        )}

        {/* <motion.span
          whileTap={{ scale: 0.9 }}
          className={cx('icon-wrapper', 'right-icon')}
          onClick={() => scroll([400, 150])}
        >
          <IoChevronForwardSharp />
        </motion.span> */}
      </div>
    </div>
  );
};

export default CategorySlider;
