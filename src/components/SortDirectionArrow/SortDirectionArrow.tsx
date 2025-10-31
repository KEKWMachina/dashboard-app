import { sortingDirection, type SortingDirection } from "../UsersDataTable/constants/sortingDirection";

export const SortDirectionArrow = ({ direction }: { direction: SortingDirection }) => {
  return direction === sortingDirection.ASC ? (
    <span>&#9660;</span>
  ) : (
    <span>&#9650;</span>
  );
};
