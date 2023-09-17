import classNames from "classnames/bind";

// styles
import styles from "./Login.module.scss";

// components
import LoginForm from "./LoginForm";
import { Logo } from "components";

const cx = classNames.bind(styles);

const LoginContent = () => {
  return (
    <div className={cx("login-root")}>
      <div className={cx("desktop")}>
        <Logo />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginContent;
