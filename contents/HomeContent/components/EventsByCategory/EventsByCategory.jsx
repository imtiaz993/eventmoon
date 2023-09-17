import { useEvents } from 'hooks';
import { EventSlider } from '..';

const Eventsbycategory = ({
  category,
  userLocation,
  handleClick,
  defaultEvent,
}) => {
  const {
    data: list,
    isLoading,
    error,
  } = useEvents(
    category.Categoryid,
    userLocation,
    1,
    !!userLocation,
    defaultEvent
  );

  return (
    <EventSlider
      heading={category.CategoryName || ''}
      list={isLoading ? Array(4).fill({}) : list}
      error={error}
      to
      limit
      handleClick={() => handleClick(category)}
    />
  );
};

export default Eventsbycategory;
