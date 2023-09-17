export const convertToSlug = (_str) => {
  if (!_str) return null;
  return _str.replace(/[^A-Z0-9]+/gi, '-');
};

export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const changeToSecure = (_url) => {
  if (_url) return _url.replace('http://', 'https://');

  return '';
};

export const toEventFormat = (_data) => {
  return {
    id: _data?.eventId ?? _data?.EventId,
    name: _data?.eventName ?? _data?.EventName,
    location: _data?.location ?? _data?.Location,
    image: changeToSecure(_data?.imagepath ?? _data?.Image),
    category: _data?.categoryName ?? _data?.CategoryName,
    rating: _data?.ratings ?? _data?.Ratings,
    isTrending: _data?.IsTrending,
    timeId: _data?.timeId ?? _data.TimeId,
    startDate: _data?.startDate ?? _data?.StartDate,
    isVirtual: _data?.IsVirtual,
    images: _data?.photos ?? _data?.ImageUrls ?? null,
    distance: _data?.nearMe ?? _data?.DistanceMile,
    startTime: _data?.startTime ?? _data?.StartTime,
    isNew: _data?.isNewEvent ?? _data?.IsNewEvent,
    advertisment: _data?.Advertisement ?? null,
    callToBook: _data?.CallToBook || '',
    venue: _data?.Venue,
    city: _data?.City,
    state: _data?.State,
  };
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export function simplifyDescription(_description) {
  let plainText = _description.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');

  plainText = plainText?.substring(0, 180) + '...';

  return plainText;
}

export function simplifyBlog(_blog) {
  return {
    BlogDescription: simplifyDescription(_blog.BlogDescription),
    BlogImage: _blog.BlogImage,
    BlogLink: _blog.BlogLink,
    BlogTitle: _blog.BlogTitle,
  };
}

export const handleOverflow = (str, max) => {
  if (!str) return '';
  return str.slice(0, max) + (str?.length > max ? '...' : '');
};

export const getBase64FromUrl = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};
