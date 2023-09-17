import classNames from "classnames/bind";
import { useState } from "react";

// components
import OtpInput from "react-otp-input";
import Link from "next/link";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const OTPForm = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (value) => {
    if (isNaN(value)) return;
    setOtp(value);
  };

  return (
    <div className={cx("otp-form-wrapper")}>
      <div className={cx("otp-form")}>
        <h1>Verify OTP</h1>
        <div className={cx("notice")}>
          We sent you a code to verify <br /> your email address
        </div>
        <div className={cx("sent-to")}>Sent to ahtesham@gmail.com</div>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          shouldAutoFocus
          isInputNum
          inputStyle={cx("input-field")}
          focusStyle={cx("focused-input")}
          containerStyle={cx("otp-container")}
        />
        <div className={cx("resend")}>
          <span>I didn't receive a code! </span>
          <Link href="#">
            <a>Resend</a>
          </Link>
        </div>
        <input
          className={cx("submit-btn")}
          type="button"
          value="Verify and Create Account"
        />
        <Link href="#">
          <a className={cx("another-way")}>Try another way</a>
        </Link>
      </div>
    </div>
  );
};

export default OTPForm;
