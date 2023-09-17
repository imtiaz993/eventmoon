import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./GetAppModal.module.scss";
import Image from "next/image";
import { PlayStore, AppStore } from "../../../../svgs";
import Link from "next/link";

const cx = classNames.bind(styles);

const GetAppModal = ({setIsOpenModal, isAndroid, setIsAndroid, isIos, setIsIos }) => {
  useEffect(() => {
    if(!isAndroid&&!isIos){document.body.style.overflow = 'unset';}
  }, [isAndroid,isIos])
  

  return isAndroid || isIos ? (
    <div className={cx("modal-container")}>
      <div className={cx("modal-wrapper")}>
        <div className={cx("top")}>
          <div
            className={cx("close")}
            onClick={() => {
              setIsAndroid(false);
              setIsIos(false);
              setIsOpenModal(false)
              localStorage.setItem(
                'getAppModal',
                JSON.stringify(false)
              )
            }}
          >
            X
          </div>
          <h1 className={cx("heading")}>Grab the Moon</h1>
        </div>
        <h1>
          {isAndroid}
          {isIos}
        </h1>
        <p className={cx("sub-heading")}>
          Find Event near you with Eventmoon app
        </p>
        <span>
          <Image src="/assets/images/mobile.png" alt="mobile" width="251px" height="408.32px"/>
        </span>
        <p className={cx("text")}>Now available on</p>
        <div className={cx("get-the-app")}>
          {isAndroid && (
            <Link
              href="https:play.google.com/store/apps/details?id=com.music_event_app&hl=en_US&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              <a className={cx("btn-playstore-mr")}>
                <PlayStore />
              </a>
            </Link>
          )}
          {isIos && (
            <Link
              href="https:apps.apple.com/us/app/event-moon/id1317300725"
              target="_blank"
              rel="noreferrer"
            >
              <a className={cx("btn-appsotre-ml")}>
                <AppStore />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default GetAppModal;
