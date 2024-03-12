import { useEffect, useState } from 'react';

export interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
  launchYear: number | null;
  types: string[];
}

const useFetchPublicHolidays = (year: number) => {
  const [publicHolidays, setPublicHolidays] = useState<Holiday[]>([]);

  const fetchPublicHolidays = async () => {
    try {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${year}/ua`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPublicHolidays(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPublicHolidays();
  }, [year]);

  return { publicHolidays };
};

export default useFetchPublicHolidays;
