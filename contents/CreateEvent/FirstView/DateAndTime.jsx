import classNames from 'classnames/bind';

// components
import {
  CustomSelect,
  TwoColumns,
  CheckboxGroup,
  Checkbox,
} from '../components';
import { Input } from 'components';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import Select from 'react-select';

// assets
import { CalendarFill, Clock } from '../../../svgs';

// styles
import styles from '../styles.module.scss';

const cx = classNames.bind(styles);

const DateAndTime = ({ formData, setFormData }) => {
  const timeZoneOptions = [
    { value: 'GMT+1', label: 'GMT+1' },
    { value: 'GMT+2', label: 'GMT+2' },
    { value: 'GMT+3', label: 'GMT+3' },
    { value: 'GMT+4', label: 'GMT+4' },
    { value: 'GMT+5', label: 'GMT+5' },
    { value: 'GMT+6', label: 'GMT+6' },
  ];

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'var(--color-gray-light)',
      border: 'none',
    }),
    placeholder: (styles) => ({
      ...styles,
      color: 'rgba(0, 0, 0, 0.4)',
      opacity: 0.5,
    }),
  };

  return (
    <div>
      <h2>Date And Time</h2>
      <p>
        Help people in the area discover your event and let attendees know when
        to show up.
      </p>
      <CustomSelect
        selected={formData.eventOccurenceType}
        onChange={(val) => {
          setFormData((prev) => {
            return { ...prev, eventOccurenceType: val };
          });
        }}
        options={['Single Event', 'Recurring Event']}
      />
      <TwoColumns>
        <Input
          inputWrapperClass={cx('inputWrapperClass')}
          label='Event Start Date'
          placeholder='Enter event start date'
          Prefix={<CalendarFill />}
          inputEl={DatePicker}
          selected={formData.startDate}
          id='start-date'
          value={formData.startDate}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, startDate: e };
            });
          }}
        />
        <Input
          inputWrapperClass={cx('inputWrapperClass')}
          placeholder='Enter event start time'
          label='Event Start Time'
          Prefix={<Clock />}
          inputEl={TimePicker}
          showSecond={false}
          format={'h:mm a'}
          use12Hours
          inputReadOnly
          className={cx('timepicker-input')}
          defaultPadding
          value={formData.startTime}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, startTime: e };
            });
          }}
        />
      </TwoColumns>
      <TwoColumns>
        <Input
          inputWrapperClass={cx('inputWrapperClass')}
          label='Event End Date'
          placeholder='Enter event end date'
          Prefix={<CalendarFill />}
          inputEl={DatePicker}
          selected={formData.endDate}
          id='end-date'
          value={formData.endDate}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, endDate: e };
            });
          }}
        />
        <Input
          inputWrapperClass={cx('inputWrapperClass')}
          placeholder='Enter event end time'
          label='Event End Time'
          Prefix={<Clock />}
          inputEl={TimePicker}
          showSecond={false}
          format={'h:mm a'}
          use12Hours
          inputReadOnly
          className={cx('timepicker-input')}
          defaultPadding
          value={formData.endTime}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, endTime: e };
            });
          }}
        />
      </TwoColumns>
      <CheckboxGroup>
        <Checkbox
          id='display-start-time'
          name='display-start-time'
          type='checkbox'
          checked={formData.isDisplayStartTime}
          onChange={(e) => {
            setFormData((prev) => {
              return {
                ...prev,
                isDisplayStartTime: Boolean(!prev.isDisplayStartTime),
              };
            });
          }}
        />
        <label htmlFor='display-start-time'>Display start time</label>
      </CheckboxGroup>

      <Input
        label='Time zone'
        inputEl={Select}
        placeholder='Select Time zone'
        options={timeZoneOptions}
        isSearchable
        isClearable
        styles={selectStyles}
        id='timezone'
        name='timezone'
        defaultPadding
        value={formData.timeZone}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, timeZone: e };
          });
        }}
      />
    </div>
  );
};

export default DateAndTime;
