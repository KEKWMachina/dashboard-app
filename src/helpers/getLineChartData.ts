import { LineChartScatterTraceConfig } from "../components/charts/LineChart/constants/lineChartConstants";
import type { ScatterTraceInterface } from "../interfaces/ScatterTraceInterface";
import type { UserInterface } from "../interfaces/UserInterface";

const getHoverTemplate = (age: number, usersCount: number): string => {
  return `<span>Age:${age}</span><br><span>Users:${usersCount}</span>`;
};

export const getLineChartData = (
  users: UserInterface[]
): ScatterTraceInterface[] => {
  const baseTrace = structuredClone(LineChartScatterTraceConfig);
  const usersByAge = users.reduce(
    (acc: { [key: number]: UserInterface[] }, curr) => {
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
