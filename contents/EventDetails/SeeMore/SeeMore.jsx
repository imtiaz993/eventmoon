import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames/bind';

// components
import { Banner } from './components';

// icons
import Video from '../../../svgs/Video';

// helper
import { formatDate } from './data/helper';

// styles
import styles from './SeeMore.module.scss';

const cx = classNames.bind(styles);

const SeeMore = ({ data }) => {
  const [type, setType] = useState(null);

  useState(() => {
    if (data) {
      if (data.IsVirtual === '1') setType('virtual');
      else if (data.TicketUrl !== '') setType('ticket');
      else setType('information');
    }
  }, [data]);

  const goToTicket = () => {
    window.open(data.TicketUrl);
  };

  const goToMap = () => {
    let map = document.getElementById('map');
    map.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ delay: 1.25, type: 'tween' }}
          className={cx('see-more-root')}
        >
          {type === 'ticket' ? (
            <Banner
              priceLabel={data.TicketPrice}
              btnLabel='Get Ticket'
              title={formatDate(data.StartDate).month_date}
              handleClick={goToTicket}
            />
          ) : type === 'virtual' ? (
            <Banner
              PrefixIcon={Video}
              btnLabel='Virtual Event'
              title='Join virtual Event'
            />
          ) : (
            <Banner btnLabel='More information' title='More information' />
          )}
          {/* <Banner
              SuffixIcon={Bell}
              btnLabel="Notify me"
              title="Notify me"
              rounded="rounded-20"
            /> */}
          {/* <Banner
              PrefixIcon={ArrowRight}
              btnLabel="Get Directions"
              title="This Event is starting soon"
              handleClick={goToMap}
            /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SeeMore;
