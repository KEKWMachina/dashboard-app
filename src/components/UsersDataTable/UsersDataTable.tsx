import { useMemo, useState } from "react";

import { SortDirectionArrow } from "../SortDirectionArrow/SortDirectionArrow";
import { columns, type ColumnKeys } from "./constants/columns";
import {
  sortingDirection,
  type SortingDirection,
} from "./constants/sortingDirection";
import type { User } from "../../interfaces";

export const UsersDataTable = ({ users }: { users: User[] }) => {
  const [sortBy, setSortBy] = useState<{
    key: ColumnKeys;
    direction: SortingDirection;
  }>({
    key: columns[0].key,
    direction: sortingDirection.ASC,
  });

  const handleHeaderCellClick = (headerKey: ColumnKeys) => {
    const noDirection = headerKey !== sortBy.key;

    if (noDirection) {
      setSortBy({
        key: headerKey,
        direction: sortingDirection.ASC,
      });

      return;
    }

    const newDirection =
      sortBy.direction === sortingDirection.ASC
        ? sortingDirection.DESC
        : sortingDirection.ASC;

    setSortBy({
      key: headerKey,
      direction: newDirection,
    });
  };

  const sortedArray = useMemo(() => {
    if (columns.find(({ key }) => key === sortBy.key)) {
      return [...users].sort((a, b) => {
        const aVal = a[sortBy.key];
        const bVal = b[sortBy.key];

        if (aVal === bVal) return 0;

        if (sortBy.direction === sortingDirection.ASC) {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });
    }

    return users;
  }, [users, sortBy]);

  return (
    <div className="text-start text-stone-800 pl-4 pt-0 mr-4 h-[calc(100%-60px)] w-[calc(100% - 16px)] text-sm overflow-auto">
      <table className="h-full w-full">
        <thead className="text-sm sticky top-0 text-white bg-black">
          <tr>
            {columns.map(({ label, key }) => (
              <th
                key={key}
                onClick={() => handleHeaderCellClick(key)}
                className="text-start cursor-pointer group"
              >
                {label}
                <span className="ml-4">
                  {sortBy.key === key ? (
                    <SortDirectionArrow direction={sortBy.direction} />
                  ) : (
                    <span className="invisible group-hover:visible">
                      &#9650;
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedArray.map(
            ({ id, firstName, email, role, birthDate, weight, height }) => (
              <tr key={id} className="border-b pb-1">
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>{birthDate}</td>
                <td>{weight}</td>
                <td>{height}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
