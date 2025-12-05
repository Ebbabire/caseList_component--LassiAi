export type CaseStatus = "New" | "In Progress" | "Completed";

export interface Case {
  id: string;
  species: string;
  name: string;
  age: string;
  owner: string;
  complaint: string;
  status: CaseStatus;
  createdAt: string;
}
