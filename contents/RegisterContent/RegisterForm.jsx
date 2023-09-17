import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// hooks
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';

// styles
import styles from './Register.module.scss';

// utils
import registerUser from '../../utils/requests/register_screen/register';

// components
import { Input, Checkbox, Button } from 'components';
import Link from 'next/link';

// assets
import { Mail, Shield, User, Dots } from '../../svgs';

const cx = classNames.bind(styles);

const RegisterForm = ({}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const response = await registerUser({ email, password });

      if (response.data.Status) {
        setIsLoading(false);
        toast.success(response.data.Results);
        router.push('/login');
      } else {
        setIsLoading(false);
        toast.error(response.data.ErrorMessage);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      terms_and_conditions: false,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      first_name: Yup.string().required('First Name Required'),
      last_name: Yup.string().required('Last Name Required'),
      email: Yup.string().email('Invalid Email').required('Required'),
      password: Yup.string()
        .min(8, 'Too Short: minimum is 8 characters')
        .required('Password Required'),
      terms_and_conditions: Yup.boolean().oneOf(
        [true],
        'please accept our terms and conditions to proceed'
      ),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className={cx('register-form-wrapper')}>
      <form className={cx('register-form')} onSubmit={formik.handleSubmit}>
        <div className={cx('title', 'desktop')}>Register</div>
        <h1>Create New Account</h1>
        <div className={cx('title', 'mobile')}>{`Let's Register.`}</div>
        <div className={cx('input-fields')}>
          <div className={cx('grid-cols-2')}>
            <Input
              label='First Name'
              name='first_name'
              id='first_name'
              placeholder='First Name'
              Prefix={<User />}
              error={formik.touched.first_name && formik.errors.first_name}
              inputWrapperClass={cx('input-wrapper', {
                invalid: formik.touched.first_name && formik.errors.first_name,
              })}
              {...formik.getFieldProps('first_name')}
            />
            <Input
              label='Last Name'
              name='last_name'
              id='last_name'
              placeholder='Last Name'
              Prefix={<User />}
              error={formik.touched.last_name && formik.errors.last_name}
              inputWrapperClass={cx('input-wrapper', {
                invalid: formik.touched.last_name && formik.errors.last_name,
              })}
              {...formik.getFieldProps('last_name')}
            />
          </div>
          <Input
            label='Email'
            name='email'
            id='email'
            type='email'
            placeholder='Email Address'
            Prefix={<Mail />}
            error={formik.touched.email && formik.errors.email}
            inputWrapperClass={cx('input-wrapper', {
              invalid: formik.touched.email && formik.errors.email,
            })}
            {...formik.getFieldProps('email')}
          />
          <Input
            label='Password'
            name='password'
            id='password'
            type='password'
            placeholder='Password'
            Prefix={<Shield />}
            error={formik.touched.password && formik.errors.password}
            inputWrapperClass={cx('input-wrapper', {
              invalid: formik.touched.password && formik.errors.password,
            })}
            {...formik.getFieldProps('password')}
          />
          <div>
            <div className={cx('terms')}>
              <div className={cx('checkbox-group')}>
                <Checkbox
                  name='terms-and-conditions'
                  id='terms-and-conditions'
                  {...formik.getFieldProps('terms_and_conditions')}
                />
                <label htmlFor='terms-and-conditions'>
                  <span>I agree to the </span>
                  <a href='#'>terms and conditions</a>
                </label>
              </div>
              <div className={cx('error')}>
                {formik.touched.terms_and_conditions &&
                  formik.errors.terms_and_conditions}
              </div>
            </div>
          </div>
          <Button
            label={!isLoading ? 'Sign Up' : <Dots />}
            wrapperClass={cx('submit-btn')}
          />
          <div className={cx('have-account', 'desktop')}>
            <span>Do you have an account? </span>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </div>
        </div>
        {/* TODO: Add the mobile version of login*/}
        <div className={cx('have-account', 'mobile')}>
          <div className={cx('text')}>Already have an account?</div>
          <Link href='/login'>
            <a className={cx('login-btn')}>LOG IN</a>
          </Link>
          <div className={cx('notice')}>
            By clicking {`"SIGN UP"`} I agree to Event Moon Terms and Privacy.
            <br />I confirm that I am at least 13 years old.
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
