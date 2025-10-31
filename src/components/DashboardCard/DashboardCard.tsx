import type { JSX } from "react";

export const DashboardCard = ({ children, title }: { children: JSX.Element, title: string }) => {
  return (
    <div className="bg-white drop-shadow-dashboard-widget rounded-md h-full text-center overflow-clip">
      <div className="font-bold text-stone-800 p-2">{title}</div>
      {children}
    </div>
  );
};
