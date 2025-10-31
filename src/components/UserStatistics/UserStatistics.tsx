import type { UserStatisticsInterface } from "../../interfaces/UserStatisticsInterface";
import { BarChart } from "../charts/BarChart/BarChart";

export const UserStatistics = ({
  statistics,
}: {
  statistics: UserStatisticsInterface | undefined;
}) => {
  return (
    <>
      {statistics && (
        <div className="text-black p-8 flex flex-wrap h-[80%]">
          <div className="w-2/4 h-[30px]">
            Total users: <span className="font-bold">{statistics.total}</span>
          </div>
          <div className="w-2/4 h-[30px]">
            Median age:
            <span className="font-bold">{statistics.ageMedian}</span>
          </div>
          <div className="w-2/4 h-[calc(100%-30px)]">
            Height
            <BarChart
              average={statistics.avgHeight}
              max={statistics.maxHeight}
            />
          </div>
          <div className="w-2/4 h-[calc(100%-30px)]">
            Weight
            <BarChart
              average={statistics.avgWeight}
              max={statistics.maxWeight}
            />
          </div>
        </div>
      )}
    </>
  );
};
