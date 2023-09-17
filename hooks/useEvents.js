import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';

import { BASE_URL } from 'utils/constants';
import { getCurrentDate } from 'utils/dateHelper';

const fetchEvents = async (_categoryId, _coords, _pageCount) => {
  const now = getCurrentDate();

  const bodyData = {
    categoryId: _categoryId,
    latitude: _coords.latitude,
    longitude: _coords.longitude,
    pageNumber: _pageCount,
    dateTimeNow: now.prettier.dateTimeNow,
    totalPageCount: 16,
    accessToken: '',
    sortOrder: 'distance',
    isFromWeb: '1',
  };

  try {
    const { data } = await axios({
      method: 'POST',
      url: `${BASE_URL}/NewEvent`,
      data: bodyData,
    });

    if (data.Status ) {
      return data.Results;
    } else {
      console.log(data.ErrorMessage);
      // throw new Error(data.ErrorMessage);
    }
  } catch (err) {
    console.log(err)
    // throw new Error(err);
  }
};

export const useInfiniteEvents = (
  _categoryId,
  _coords,
  _isEnabled,
  int_fetchedEvents
) => {
  return useInfiniteQuery(
    ['events', _categoryId, _coords],
    ({ pageParam = 0 }) => fetchEvents(_categoryId, _coords, pageParam),
    {
      initialData: int_fetchedEvents,
      enabled: _isEnabled,
      getNextPageParam: (lastPage, pages) => {
        const index = pages.findIndex((page) => page === lastPage) + 1;
        if (index > 16) return;
        return index;
      },
    }
  );
};

const useEvents = (
  _categoryId,
  _coords,
  _pageCount,
  _isEnabled,
  defaultEvent
) => {
  return useQuery(
    ['events', _categoryId, _coords, _pageCount],
    () => fetchEvents(_categoryId, _coords, _pageCount),
    { initialData: defaultEvent, enabled: _isEnabled }
  );
};

export { useEvents, fetchEvents };
