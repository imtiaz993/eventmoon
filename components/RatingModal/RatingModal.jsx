import React from "react";
import classNames from "classnames/bind";
import styles from "./RatingModal.module.scss";
import Image from "next/image";
import { useState } from "react";
const cx = classNames.bind(styles);

const RatingModal = () => {
  const [ratingModal, setRatingModal] = useState(true);
  return (
    <>
      {ratingModal && (
        <div className={cx("modal-container")}>
          <div className={cx("modal-wrapper")}>
            <div className={cx("close-wrapper")}>
              <span
                className={cx("close")}
                onClick={() => {
                  setRatingModal(false);
                }}
              >
                X
              </span>
            </div>
            <h1 className={cx("rating-question")}>
              How was the <span>Event ?</span>
            </h1>
            <div className={cx("rating")}>
              <div>
                <Image
                  src="/assets/images/rating-star.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/assets/images/rating-star.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/assets/images/rating-star.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/assets/images/rating-star.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/assets/images/rating-star.png"
                  width="40px"
                  height="40px"
                  alt=""
                />
              </div>
            </div>
            <p className={cx("feedback-text")}>Very Good</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RatingModal;
