import type { User, UserStatistics } from "../interfaces";

const getMedian = (ageArr: number[]): number => {
  const sorted = Array.from(ageArr).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
};

const getAverage = (numbers: number[]): number => {
  return parseFloat(
    (numbers.reduce((acc, num) => acc + num, 0) / numbers.length).toFixed(2)
  );
};

export const getUserStatistics = (users: User[]): UserStatistics => {
  const ages = users.map(({ age }) => age);
  const heights = users.map(({ height }) => height);
  const weights = users.map(({ weight }) => weight);

  return {
    total: users.length,
    ageMedian: getMedian(ages),
    avgHeight: getAverage(heights),
    avgWeight: getAverage(weights),
    maxHeight: Math.max(...heights),
    maxWeight: Math.max(...weights),
  };
};
