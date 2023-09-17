// components
import { CustomSelect } from '../components';
import { Input } from 'components';
import DatePicker from 'react-datepicker';
import classNames from 'classnames/bind';
import styles from '../styles.module.scss';
// assets
import CalendarFill from '../../../svgs/CalendarFill';
const cx = classNames.bind(styles);
const ThirdView = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Add Ticket</h2>
      <p>
        Name your event and tell event-goers why they should come. Add details{' '}
        <br /> that highlight what makes it unique.
      </p>
      <CustomSelect
        selected={formData.eventPricingType}
        onChange={(val) => {
          setFormData((prev) => {
            return { ...prev, eventPricingType: val };
          });
        }}
        options={['Paid', 'Free', 'Donation']}
      />
      <Input
        inputWrapperClass={cx('inputWrapperClass')}
        label='Available Quantity'
        type='number'
        name='quantity'
        id='quantity'
        placeholder='Quantity'
        value={formData.quantity}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, quantity: e.target.value };
          });
        }}
      />
      <Input
        inputWrapperClass={cx('inputWrapperClass')}
        label='Price'
        type='number'
        name='price'
        id='price'
        placeholder='$ 0.00'
        value={formData.price}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, price: e.target.value };
          });
        }}
      />
      <Input
        inputWrapperClass={cx('inputWrapperClass')}
        label='When are tickets Available?'
        inputEl={DatePicker}
        Prefix={<CalendarFill />}
        selected={new Date()}
        id='available-date'
        value={formData.ticketAnnounceDate}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, ticketAnnounceDate: e };
          });
        }}
      />
    </div>
  );
};

export default ThirdView;
