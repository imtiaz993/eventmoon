import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import classNames from "classnames/bind";

// components
import Link from "next/link";
import { Button, Rating } from "components";

// styles
import styles from "./ReviewModal.module.scss";

// context
import { UserAuthContext } from "context/UserAuthContext";
import { usePostReview } from "hooks";

const cx = classNames.bind(styles);

const ReviewModal = ({ data, toggle }) => {
  const { user } = useContext(UserAuthContext);

  const { mutate } = usePostReview(() => toggle(true));

  const [userText, setUserText] = useState("");
  const [rating, setRating] = useState(0);

  const getUsername = () => {
    if (user?.userName !== "") return user?.userName;

    return user?.emailId?.split("@")[0];
  };

  const handleClick = () => {
    let obj = {
      userId: user?.userId,
      eventID: +data.EventId,
      ratings: rating,
      reviewText: userText,
      userName: getUsername(),
      userImagePath: user?.userImagePath,
    };

    mutate(obj, {
      onSuccess: () => toast.success("review submitted!!"),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cx("review-modal-wrapper")}
      onClick={() => toggle()}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={cx("review-modal")}
        onClick={(e) => e.stopPropagation()}
      >
        {user ? (
          <>
            <h3>
              Thanks for <br /> your feedback
            </h3>
            <p>Write review about the Event.</p>
            <div className={cx("rating")}>
              <Rating
                rate={rating}
                onChange={(value) => setRating(value)}
                readonly={false}
              />
            </div>
            <textarea
              placeholder="Write review here..."
              onChange={(e) => setUserText(e.target.value)}
            />
            <div className={cx("btn-wrapper")}>
              <Button onClick={handleClick} label="Submit" />
              <Button onClick={() => toggle()} label="Cancel" />
            </div>
          </>
        ) : (
          <div className={cx("no-user")}>
            <h2>Please Login to write a review</h2>
            <Link href="/login">
              <a>
                <button>Login</button>
              </a>
            </Link>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ReviewModal;
