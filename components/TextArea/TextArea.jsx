import classNames from 'classnames/bind';
import { useState } from 'react';

// styles
import styles from './TextArea.module.scss';

// components
import { Error } from 'components';

const cx = classNames.bind(styles);

const TextArea = ({ maxLength, label, error, value, setValue, ...rest }) => {
  const [_value, _setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      (setValue || _setValue)(newValue);
    }
  };

  return (
    <div className={cx('custom-textarea')}>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <textarea
        {...rest}
        value={value || _value}
        onChange={handleChange}
      ></textarea>
      <div>
        {(value || _value)?.length}/{maxLength}
      </div>
      <Error error={error} />
    </div>
  );
};

export default TextArea;
