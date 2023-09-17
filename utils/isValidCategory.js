export const isCategory = (url) => {
  const category = url.split('/');
  if (url === '/') {
    return true;
  } else if (category.length > 3) {
    return false;
  } else {
    switch (category[1]) {
      case 'Today':
      case 'Tomorrow':
      case 'This-Weekend':
      case 'Entertainment':
      case 'Live-Music':
      case 'Activities':
      case 'Family':
      case 'Business':
      case 'Tech':
      case 'Games':
      case 'Health':
      case 'Virtual':
      case 'Sports':
      case 'Party':
      case 'Flying-Day':
        return true;

      default:
        false;
    }
  }
};

export const getCategoryId = (categoryName) => {
  switch (categoryName) {
    case 'Today':
      return -1;
    case 'Tomorrow':
      return -2;
    case 'This-Weekend':
      return -4;
    case 'Entertainment':
      return 1;
    case 'Live-Music':
      return 2;
    case 'Activities':
      return 3;
    case 'Family':
      return 4;
    case 'Business':
      return 5;
    case 'Tech':
      return 6;
    case 'Games':
      return 7;
    case 'Health':
      return 8;
    case 'Virtual':
      return 9;
    case 'Sports':
      return 10;
    case 'Party':
      return 11;
    case 'Flying-Day':
      return 16;

    default:
      return -3;
  }
};
