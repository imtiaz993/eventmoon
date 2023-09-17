import classNames from "classnames/bind";
import * as Yup from "yup";
import { toast } from "react-toastify";

// hooks
import { useFormik } from "formik";
import { useRouter } from "next/router";

// styles
import styles from "./ForgotPassword.module.scss";

// components
import { Logo, Input, Button } from "components";

// utils
import { forgotPassword } from "utils/requests/register_screen/forgot";

const cx = classNames.bind(styles);

const ForgotPasswordContent = () => {
  const router = useRouter();

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email isn't valid")
        .required("Please provide email"),
    }),
    onSubmit: ({ email }) => {
      forgotPassword(email)
        .then((data) => {
          if (data.Status) {
            toast.success(data.Results);
            router.push("login");
          } else {
            toast.error(data.ErrorMessage);
          }
        })
        .catch((error) => console.warn(error));
    },
  });

  return (
    <div className={cx("forgot-password-root")}>
      <form className={cx("form")} onSubmit={formik.handleSubmit}>
        <Logo wrapperClass={cx("logo")} />
        <Input
          label="Email"
          placeholder="Type your email"
          type="email"
          error={formik.errors.email}
          {...formik.getFieldProps("email")}
        />
        <Button wrapperClass={cx("submit-btn")} label="Send" type="submit" />
      </form>
    </div>
  );
};

export default ForgotPasswordContent;
