import { fetchSearchEvents } from 'utils/network';

// hooks
import { useQuery } from 'react-query';

export const useSearchEvents = (
  searchTerm,
  userLocation,
  departure,
  end,
  isVirtual,
  distance,
  category,
  _isEnabled = true,
  _onSuccess
) => {
  return useQuery(
    [
      'events-search-results',
      searchTerm,
      departure,
      end,
      isVirtual,
      distance,
      category,
      userLocation,
    ],
    () =>
      fetchSearchEvents(
        searchTerm,
        departure,
        end,
        isVirtual,
        distance,
        category,
        userLocation
      ),
    { enabled: _isEnabled, onSuccess: _onSuccess }
  );
};
