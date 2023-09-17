import React, { useEffect } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./EventAddedModal.module.scss";

const cx = classNames.bind(styles);

const EventAddedModal = ({ setEventAddedModal }) => {
  return (
    <div className={cx("modal-container")}>
      <div className={cx("modal-wrapper")}>
        <div className={cx("moon")}>
          <Image
            src="/assets/images/event-added.png"
            width="106px"
            height="106px"
            alt="added"
          />
        </div>
        <div
          className={cx("close")}
          onClick={() => {
            setEventAddedModal(false);
          }}
        >
          X
        </div>
        <h4 className={cx("heading")}>Your event “Justin Bieber tour”</h4>
        <h4 className={cx("heading")}>
          {" "}
          is now <span className={cx("live")}>live</span>
        </h4>

        <p className={cx("subtext")}>Here is your link</p>
        <div className={cx("pick-image")}>
          <p className={cx("heading")}>Eventmoon/justinbieber/.com</p>
        </div>
        <div className={cx("share-wrapper")}>
       
            <Image
              src="/assets/images/share.svg" 
              width="19px"
              height="17.1px"
              alt="share"
            />
          
        
          <p className={cx("share-friends")}>Share with Friends</p>
        </div>
        <div className={cx("share-icons")}>
          <span>
            <Image
              src="/assets/images/facebook-share.svg"
              width="21px"
              height="21px"
              alt="facebook"
            />
          </span>
          <span>
            <Image
              src="/assets/images/linkedIn-share.svg"
              width="21px"
              height="21px"
              alt="linkedIn"
            />
          </span>
          <span>
            <Image
              src="/assets/images/twitter-share.svg"
              width="21px"
              height="21px"
              alt="twitter"
            />
          </span>
          <span>
            <Image
              src="/assets/images/mail-share.svg"
              width="21px"
              height="21px"
              alt="mail"
            />
          </span>
          <span>
            <Image
              src="/assets/images/whatsapp-share.svg"
              width="21px"
              height="21px"
              alt="whatsapp"
            />
          </span>
          <span>
            <Image
              src="/assets/images/mobile-share.svg"
              width="21px"
              height="21px"
              alt="mobile"
            />
          </span>
        </div>
        <button className={cx("link-button")}>Copy Link</button>
      </div>
    </div>
  );
};

export default EventAddedModal;
