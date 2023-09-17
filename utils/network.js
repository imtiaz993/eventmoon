import axios from 'axios';
import { getCategoryId } from 'utils/isValidCategory';
// constants
import { IP_GEO_API_KEY, BASE_URL } from './constants';

// data helper
import { getCurrentDate } from './dateHelper';

function fetchUserLocation() {
  const response = axios({
    method: 'get',
    url: `https://api.ipgeolocation.io/ipgeo?apiKey=${IP_GEO_API_KEY}`,
  });

  return response;
}

async function fetchSearchEvents(
  _searchText,
  departure,
  end,
  isVirtual,
  distance,
  category,
  _location
) {
  let now = getCurrentDate();

  let data = {
    userId: 0,
    AccessToken: '',
    SearchText: _searchText,
    StartDate: departure?departure: null,
    EndDate: end?end:null,
    isVirtual:isVirtual==="Virtual Event"?true:null,
    DistanceCover:distance==null?null:Number(distance),
    MainCatId: category?getCategoryId(category):null,
    Latitude: _location.latitude,
    LongiTude: _location.longitude,
    Date: now.prettier.dateTimeNow,
   
  };

  const { data: responseData } = await axios({
    method: 'POST',
    url: `${BASE_URL}/NewEventFilter`,
    data: data,
  });

  if (responseData.Status) {
    return responseData.Results;
  } else {
    console.log(data.ErrorMessage)
    // throw Error(data.ErrorMessage);
  }
}

export { fetchUserLocation, fetchSearchEvents };
