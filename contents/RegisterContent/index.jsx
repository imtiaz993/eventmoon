import classNames from "classnames/bind";

// styles
import styles from "./Register.module.scss";

// components
import RegisterForm from "./RegisterForm";
import { Logo } from "../../components";

const cx = classNames.bind(styles);

const RegisterContent = () => {
  return (
    <div className={cx("register-root")}>
      <div className={cx("desktop")}>
        <Logo />
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterContent;
