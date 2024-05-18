const FILTER_TYPES = [
  {
    value: 'everything',
    isChecked: true
  },
  {
    value: 'future'
  },
  {
    value: 'present'
  },
  {
    value: 'past'
  }
];

const SORTING_TYPES = [
  {
    value: 'day',
    isActive: true,
    isChecked: true
  },
  {
    value: 'event',
    isActive: false
  },
  {
    value: 'time',
    isActive: true
  },
  {
    value: 'price',
    isActive: true
  },
  {
    value: 'offer',
    title: 'offers',
    isActive: false
  }
];

const EVENT_TYPES = [ 'taxi', 'bus', 'train', 'ship', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const ErrorMessages = {
  NO_DATE: 'Не указана нужная дата и(или) формат даты.',
  NO_DURATION: 'Не указано начало или конец промежутка времени',
  NO_ARGUMENTS: 'Не переданы необходимые аргументы функции и(или) некоторые из них пустые',
  NO_ELEMENT: 'Безрезультатно. Функция ничего не вернула'
};

const DateFormats = {
  MD: 'MMM DD',
  DMY_HM: 'DD/MM/YY H:m',
  HM: 'HH:mm',
};

const TimeFormats = {
  HOUR: 3600000,
  DAY: 86400000,
};

const DurationFormats = {
  MINUTES: 'mm[M]',
  HOURS_MINUTES: 'HH[H] mm[M]',
  DAYS_HOURS_MINUTES: 'DD[D] HH[H] mm[M]',
};

export {
  FILTER_TYPES,
  SORTING_TYPES,
  EVENT_TYPES,
  ErrorMessages,
  DateFormats,
  TimeFormats,
  DurationFormats
};
