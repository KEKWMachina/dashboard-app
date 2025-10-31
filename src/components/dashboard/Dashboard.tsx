import { useEffect, useState } from "react";

import { UserStatistics } from "../UserStatistics/UserStatistics";
import { DashboardCard } from "./DashboardCard/DashboardCard";
import { usersApi } from "../../api/usersApi";
import { LineChart } from "../charts/LineChart/LineChart";
import { getLineChartData } from "../../helpers/getLineChartData";
import type { ScatterTraceInterface } from "../../interfaces/ScatterTraceInterface";
import type { UserStatisticsInterface } from "../../interfaces/UserStatisticsInterface";
import { getUserStatistics } from "../../helpers/getUserStatistics";

export const Dashboard = () => {
  const [chartData, setChartData] = useState<ScatterTraceInterface[]>([]);
  const [userStatistics, setUserStatistics] =
    useState<UserStatisticsInterface>();

  useEffect(() => {
    usersApi.getAll().then((users) => {
      setChartData(getLineChartData(users));
      setUserStatistics(getUserStatistics(users));
    });
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="grid grid-cols-6 grid-rows-3 sm:grid-rows-2 gap-4 p-12">
        <div className="col-start-1 col-span-6 min-h-[300px]">
          <DashboardCard title={"Users Data"}>
            <div>01</div>
          </DashboardCard>
        </div>
        <div className="row-start-2 col-start-1 col-span-6 sm:col-span-3 min-h-[300px]">
          <DashboardCard title={"Combined Statistics"}>
            <UserStatistics statistics={userStatistics} />
          </DashboardCard>
        </div>
        <div className="row-start-3 col-start-1 col-span-6 sm:row-start-2 sm:col-start-4 sm:col-span-3 min-h-[300px]">
          <DashboardCard title={"Users by Age"}>
            <LineChart chartData={chartData} />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};
