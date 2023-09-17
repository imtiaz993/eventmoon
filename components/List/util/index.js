export const toAdFormat = (_data) => {
  return {
    name: _data?.eventName ?? _data.Name,
    image: _data?.imagepath ?? _data.ImagePath,
    url: _data?.ticketUrl ?? _data?.Url,
  };
};
