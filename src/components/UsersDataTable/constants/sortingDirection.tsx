export const sortingDirection = {
  ASC: "ascending",
  DESC: "descending",
} as const;

export type SortingDirection =
  (typeof sortingDirection)[keyof typeof sortingDirection];
