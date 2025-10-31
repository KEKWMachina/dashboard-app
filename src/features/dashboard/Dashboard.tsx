import { useEffect, useState } from "react";

import { usersApi } from "../../api/usersApi";

import { getLineChartData } from "../../helpers/getLineChartData";
import { getUserStatistics } from "../../helpers/getUserStatistics";

import { DashboardCard } from "../../components/DashboardCard/DashboardCard";
import { UsersDataTable } from "../../components/UsersDataTable/UsersDataTable";
import { UserStatistics } from "../../components/UserStatistics/UserStatistics";
import { LineChart } from "../../components/charts/LineChart/LineChart";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import type { User } from "../../interfaces";
import type { AxiosError } from "axios";

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<AxiosError | null>();
  const [users, setUsers] = useState<User[]>([]);

  const handleDataLoading = (): void => {
    usersApi
      .getAll()
      .then((users) => {
        setLoading(true);
        setUsers(users);
        setLoading(false);
        setLoadingError(null);
      })
      .catch((err) => {
        setLoading(false);
        setLoadingError(err);
      });
  };

  useEffect(() => {
    handleDataLoading();
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      {loadingError && (
        <>
          <button
            onClick={handleDataLoading}
            className="fixed top-1/2 left-1/2 border-1 rounded-xs p-1 cursor-pointer"
          >
            Retry
          </button>
          <div className="fixed bottom-1/18 right-1/18 rounded-xs bg-red-500 p-1 text-white">
            {loadingError.message}
          </div>
        </>
      )}
      {loading ? (
        <LoadingSpinner />
      ) : (
        !loadingError && (
          <div className="grid grid-cols-6 grid-rows-3 sm:grid-rows-2 gap-4 p-12">
            <div className="col-start-1 col-span-6 h-[300px]">
              <DashboardCard title={"Users Data"}>
                <UsersDataTable users={users} />
              </DashboardCard>
            </div>
            <div className="row-start-2 col-start-1 col-span-6 sm:col-span-3 min-h-[300px]">
              <DashboardCard title={"Combined Statistics"}>
                <UserStatistics statistics={getUserStatistics(users)} />
              </DashboardCard>
            </div>
            <div className="row-start-3 col-start-1 col-span-6 sm:row-start-2 sm:col-start-4 sm:col-span-3 min-h-[300px]">
              <DashboardCard title={"Users by Age"}>
                <LineChart chartData={getLineChartData(users)} />
              </DashboardCard>
            </div>
          </div>
        )
      )}
    </div>
  );
};
