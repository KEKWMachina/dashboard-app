import { sortingDirection } from "../UsersDataTable/constants/sortingDirection";

export const SortDirectionArrow = ({ direction }: { direction: string }) => {
  return (
    <>
      {direction === sortingDirection.ASC ? (
        <span>&#9660;</span>
      ) : (
        <span>&#9650;</span>
      )}
    </>
  );
};
