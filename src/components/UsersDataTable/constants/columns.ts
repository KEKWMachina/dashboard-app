export type ColumnKeys =
  | "id"
  | "firstName"
  | "email"
  | "role"
  | "birthDate"
  | "weight"
  | "height";

export type Column<T> = {
  label: string;
  key: T;
};

export const columns: Column<ColumnKeys>[] = [
  { label: "ID", key: "id" },
  { label: "Name", key: "firstName" },
  { label: "Email", key: "email" },
  { label: "Role", key: "role" },
  { label: "Birthdate", key: "birthDate" },
  { label: "Weight", key: "weight" },
  { label: "Height", key: "height" },
];
