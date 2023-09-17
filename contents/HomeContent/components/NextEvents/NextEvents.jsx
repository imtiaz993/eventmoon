// components
import { EventsByCategory } from '..';

const NextEvents = ({
  currCategory,
  userLocation,
  count = 3,
  categories,
  handleClick,
  featuredEvents,
}) => {
  const extendedCategories = categories.concat(categories);

  const index =
    extendedCategories.findIndex(
      (category) => category.Categoryid === currCategory.Categoryid
    ) + 1;

  if (index === 0){
    console.log(`Category "${currCategory.CategoryName}" was not found in categories`)
    // throw Error(
    //   `Category "${currCategory.CategoryName}" was not found in categories`
    // );
  }

  const _categories = extendedCategories.slice(index, index + count);

  return (
    <div style={{ marginTop: '2rem' }}>
      {_categories.slice(0, count).map((category, i) => (
        <EventsByCategory
          category={category}
          userLocation={userLocation}
          handleClick={handleClick}
          key={category.Categoryid}
          defaultEvent={featuredEvents[i]}
        />
      ))}
    </div>
  );
};

export default NextEvents;
