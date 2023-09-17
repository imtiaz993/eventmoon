import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// component
import { Input, Button } from 'components';

// assets
import { Mail, Shield, Dots } from '../../svgs';

// styles
import styles from './Login.module.scss';

// utils
import loginUser from 'utils/requests/register_screen/login';

// context
import { UserAuthContext } from 'context/UserAuthContext';

const cx = classNames.bind(styles);

const LoginForm = () => {
  const { saveUserData } = useContext(UserAuthContext);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const response = await loginUser(email, password);

      if (response.data.Status) {
        console.log(response.data.Results);
        saveUserData(response.data.Results);

        localStorage.setItem(
          'getAppModal',
          JSON.stringify(true)
        )
      
        setIsLoading(false);
        router.push('/');
      } else {
        setIsLoading(false);
        toast.error(response.data.ErrorMessage);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formik = useFormik({
    initialValues: { email: '', password: '', terms_and_conditions: false },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email').required('Email Required'),
      password: Yup.string()
        .min(8, 'Too Short: minimum is 8 characters')
        .required('Password Required'),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className={cx('login-form-wrapper')}>
      <form className={cx('login-form')} onSubmit={formik.handleSubmit}>
        <div className={cx('desktop', 'title')}>Login</div>
        <h1>Welcome Back!</h1>
        <div className={cx('mobile', 'title')}>{`Let's Sign you in.`}</div>
        <div className={cx('input-fields')}>
          <Input
            label='Email'
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            Prefix={<Mail />}
            error={formik.touched.email && formik.errors.email}
            inputWrapperClass={cx('input-wrapper', {
              invalid: formik.touched.email && formik.errors.email,
            })}
            {...formik.getFieldProps('email')}
          />
          <Input
            label='Password'
            type='password'
            name='password'
            id='password'
            placeholder='Enter you Password'
            Prefix={<Shield />}
            error={formik.touched.password && formik.errors.password}
            inputWrapperClass={cx('input-wrapper', {
              invalid: formik.touched.password && formik.errors.password,
            })}
            {...formik.getFieldProps('password')}
          />
        </div>
        <Link href='/forgot-password'>
          <a className={cx('forgot-password')}>Forgot Password?</a>
        </Link>
        <Button
          label={!isLoading ? 'Log in' : <Dots />}
          wrapperClass={cx('submit-btn')}
          type='submit'
        />
        <div>
          <div className={cx('have-account')}>
            <span>Do you have an account? </span>
            <Link href='/register'>
              <a className={cx('reg-btn')}>Register</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
