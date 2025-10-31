import { useEffect, useState } from "react";

import { usersApi } from "../../api/usersApi";

import { getLineChartData } from "../../helpers/getLineChartData";
import { getUserStatistics } from "../../helpers/getUserStatistics";

import { DashboardCard } from "../../components/DashboardCard/DashboardCard";
import { UsersDataTable } from "../../components/UsersDataTable/UsersDataTable";
import { UserStatistics } from "../../components/UserStatistics/UserStatistics";
import { LineChart } from "../../components/charts/LineChart/LineChart";
import type { ScatterTrace, User } from "../../interfaces";
import type { UserStatistics as UserStatisticsInterface } from "../../interfaces";

export const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [chartData, setChartData] = useState<ScatterTrace[]>([]);
  const [userStatistics, setUserStatistics] =
    useState<UserStatisticsInterface>();

  useEffect(() => {
    usersApi.getAll().then((users) => {
      setChartData(getLineChartData(users));
      setUserStatistics(getUserStatistics(users));
      setUsers(users);
    });
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="grid grid-cols-6 grid-rows-3 sm:grid-rows-2 gap-4 p-12">
        <div className="col-start-1 col-span-6 h-[300px]">
          <DashboardCard title={"Users Data"}>
            <UsersDataTable users={users} />
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
