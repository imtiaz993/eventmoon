// libraries
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './Reviews.module.scss';

// components
import FirstReview from './FirstReview/FirstReview';
import ReviewListModal from './ReviewListModal/ReviewListModal';
import ReviewInfo from './ReviewInfo';
import Item from './Item';
import { Button } from 'components';

// hooks
import { useEventReviews } from 'hooks';

const cx = classNames.bind(styles);

const Reviews = ({ data }) => {
  // states
  const [reviewModal, setReviewModal] = useState(false);

  const { data: list, refetch } = useEventReviews(+data?.EventId);

  if (!list) return null;

  return (
    <div className={cx('reviews')}>
      {list?.length > 0 ? (
        <ReviewInfo data={data} refetch={refetch} />
      ) : (
        <FirstReview data={data} refetch={refetch} />
      )}
      {list?.length > 0 && (
        <>
          <Item data={list[0]} />
          {list?.length > 1 && (
            <Button
              label='View All Reviews'
              onClick={() => setReviewModal(true)}
            />
          )}
          {reviewModal && (
            <ReviewListModal
              list={list}
              closeModal={() => setReviewModal(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;
