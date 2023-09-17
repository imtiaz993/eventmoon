import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

// hooks
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// components
import { Input, Logo } from 'components';

// context
import { AdminAuthContext } from 'context/AdminAuthContext';

// assets
import ThreeDots from '../../../svgs/ThreeDots';

// styles
import styles from './AdminLogin.module.scss';

const cx = classNames.bind(styles);

const AdminLoginContent = ({ backTo }) => {
  const { login } = useContext(AdminAuthContext);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email isn't valid")
        .required('Please fill out this field'),
      password: Yup.string()
        .min(8, 'password is at least 8 characters')
        .required('Please fill out this field'),
    }),
    onSubmit: ({ email, password }) => {
      setIsLoading(true);

      login(email, password)
        .then(() => {
          router.push(backTo);
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error(err.message);
          setIsLoading(false);
        });
    },
  });

  return (
    <div className={cx('admin-login-root')}>
      <form className={cx('form-content')} onSubmit={formik.handleSubmit}>
        <Logo wrapperClass={cx('logo-wrapper')} />
        <div className={cx('input-group')}>
          <Input
            label='Email'
            type='email'
            placeholder='Enter email'
            error={formik.errors.email}
            {...formik.getFieldProps('email')}
          />
          <Input
            label='Password'
            type='password'
            placeholder='Enter password'
            error={formik.errors.password}
            {...formik.getFieldProps('password')}
          />
        </div>
        <button type='submit'>{isLoading ? <ThreeDots /> : 'Login'}</button>
      </form>
    </div>
  );
};

export default AdminLoginContent;
