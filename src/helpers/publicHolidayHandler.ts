import { Holiday } from '../hooks/useFetchPublicHolidays';

export const publicHolidayHandler = (
  id: string,
  holidays: Holiday[] | undefined
): string | undefined => {
  if (!holidays) {
    return undefined;
  }

  const year = id.substring(0, 4);
  const month = id.substring(4, 6);
  const day = id.substring(6);

  const formattedDate = `${year}-${month}-${day}`;

  const matchingHoliday = holidays.find(
    (holiday) => holiday.date === formattedDate
  );

  return matchingHoliday ? matchingHoliday.name : undefined;
};
