import { useEffect, useState } from "react";

import { DashboardCard } from "./DashboardCard/DashboardCard";
import { usersApi } from "../../api/usersApi";

export const Dashboard = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    usersApi.get().then((usersData) => setUsers(usersData));
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="grid grid-cols-6 grid-rows-3 sm:grid-rows-2 gap-4 p-12 min-h-full">
        <div className="col-start-1 col-span-6 min-h-[200px]">
          <DashboardCard title={"Users Data"}>
            <div>01</div>
          </DashboardCard>
        </div>
        <div className="row-start-2 col-start-1 col-span-6 sm:col-span-3 min-h-[200px]">
          <DashboardCard title={"Combined Statistics"}>
            <div>02</div>
          </DashboardCard>
        </div>
        <div className="row-start-3 col-start-1 col-span-6 sm:row-start-2 sm:col-start-4 sm:col-span-3 min-h-[200px]">
          <DashboardCard title={"Users by Age"}>
            <div>03</div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};
