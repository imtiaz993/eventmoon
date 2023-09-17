import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';

// styles
import styles from './Filters.module.scss';

// assets
import { ArrowDown, Calendar, Walk, LiveFill } from '../../../../svgs';

// components
import { Button, Input } from 'components';
import DriveDistance from './DriveDistance';
import CustomSelect from './CustomSelect';
import DatePicker from 'react-datepicker';

const cx = classNames.bind(styles);

const CustomDateInput = forwardRef(({ value, onChange,onClick, placeholder }, ref) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
      inputWrapperClass={cx('date-input')}
      suffixClass={cx('icon')}
      Suffix={<Calendar />}
      value={value}
      onClick={onClick}
    />
  );
});
CustomDateInput.displayName = 'CustomDateInput';
const Filters = ({ setIsVirtual, setStartDate,startDate, setEndDate,endDate,distance,setDistance,setCategory, shown, hide }) => {


  return (
    <div className={cx('filters-root', { shown })}>
      <div className={cx('panel')}>
        <div className={cx('heading')}>
          <h2>Filters</h2>
          <Button
            Prefix={<ArrowDown className={cx('icon')} />}
            onClick={hide}
          />
        </div>
        <div className={cx('select-categories')}>
          <div className={cx('title')}>Select Categories</div>
          <CustomSelect
            options={['Entertainment','Live-Music','Activities','Family','Business','Tech','Games','Health', 'Virtual', 'Sports', 'Party','Flying-Day']}
            wrapperClass={cx('options')}
            optionClass={cx('option')}
            selectedClass={cx('selected')}
            handleChange={setCategory}
          />
        </div>
        <div className={cx('date')}>
          <div>
            <DatePicker
               selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText={'Start Date'}
              customInput={<CustomDateInput />}
            />
          </div>
          <div>
            <DatePicker
            
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText={'End Date'}
              customInput={<CustomDateInput />}
            />
          </div>
        </div>
        <div className={cx('event-type')}>
          <div className={cx('title')}>Event Type</div>
          <CustomSelect
            options={[
              { value: 'Regular Event', suffix: <Walk /> },
              { value: 'Virtual Event', suffix: <LiveFill /> },
            ]}
            wrapperClass={cx('options')}
            optionClass={cx('option')}
            selectedClass={cx('selected')}
            handleChange={setIsVirtual}
          />
        </div>
        <DriveDistance value={distance} setValue={setDistance} />
        <div className={cx('apply-btn-wrapper')}>
          <Button
            wrapperClass={cx('apply-btn')}
            label='Apply Filters'
            onClick={hide}
          />
        </div>
      </div>
      <div className={cx('backdrop')} onClick={hide}></div>
    </div>
  );
};

export default Filters;
