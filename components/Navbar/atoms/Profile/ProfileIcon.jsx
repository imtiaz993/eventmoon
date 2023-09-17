import React, { useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./Profile.module.scss";
const cx = classNames.bind(styles);

const ProfileIcon = ({ user }) => {
  const [isError, setIsError] = useState(false);

  const getChar = () => {
    if (user.userName !== "") return user.userName.charAt(0);

    return user.emailId.charAt(0);
  };

  return (
    <div className={cx("profile-icon-root", { placeholder: isError })}>
      {!isError ? (
        <Image
          src={user.userImagePath}
          alt="..."
          onError={() => setIsError(true)}
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <span>{getChar()}</span>
      )}
    </div>
  );
};

export default ProfileIcon;
