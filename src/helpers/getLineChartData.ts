import { LineChartScatterTraceConfig } from "../components/charts/LineChart/constants/lineChartConstants";
import type { ScatterTrace } from "../interfaces/ScatterTrace.interface";
import type { User } from "../interfaces/User.interface";

const getHoverTemplate = (age: number, usersCount: number): string => {
  return `<span>Age:${age}</span><br><span>Users:${usersCount}</span>`;
};

export const getLineChartData = (
  users: User[]
): ScatterTrace[] => {
  const baseTrace = structuredClone(LineChartScatterTraceConfig);
  const usersByAge = users.reduce(
    (acc: { [key: number]: User[] }, curr) => {
      if (!acc[curr.age]) {
        acc[curr.age] = [];
      }

      acc[curr.age].push(curr);

      return acc;
    },
    {}
  );

  Object.entries(usersByAge).forEach((entry) => {
    const age = Number(entry[0]);
    const usersCount = entry[1].length;

    baseTrace.x.push(age);
    baseTrace.y.push(usersCount);
    baseTrace.text.push(getHoverTemplate(age, usersCount));
  });

  return [baseTrace];
};
