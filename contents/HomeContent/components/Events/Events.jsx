// hooks
import { useInfiniteEvents, useNoScroll } from "hooks";

import classNames from "classnames/bind";

// components
import { List, Heading, Button } from "components";

// assets
import LoadingEllipsis from "../../../../svgs/LoadingEllipsis";

import styles from "./Events.module.scss";
const cx = classNames.bind(styles);

const Events = ({ currentCategory, userLocation, int_fetchedEvents }) => {
  const { fetchNextPage, data, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteEvents(
      currentCategory.Categoryid,
      userLocation,
      !!userLocation,
      int_fetchedEvents
    );

  const loadMoreEvents = () => {
    if (!isFetchingNextPage && !isLoading && hasNextPage) fetchNextPage();
  };

  useNoScroll(isLoading || !data);
  let items;
  if (data.pages.length && data.pages[0]!==undefined) {
    items = data?.pages.reduce((a, b) => a.concat(b));
  }

  return (
    <div className={cx("events-root")}>
      <Heading title={currentCategory.CategoryName} />
      <List
        items={isLoading || !data ? Array(4).fill({}) : items}
        heading={currentCategory.CategoryName}
      />
      {hasNextPage && (
        <div className={cx("load-more-wrapper")}>
          {isFetchingNextPage ? (
            <LoadingEllipsis color="var(--color-primary)" />
          ) : (
            <Button
              label="Load more"
              onClick={loadMoreEvents}
              wrapperClass={cx("load-more-btn")}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Events;
