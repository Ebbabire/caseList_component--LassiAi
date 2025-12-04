export type CaseStatus = "New" | "In Progress" | "Completed";

export interface Case {
  id: string;
  species: string;
  name: string;
  complaint: string;
  status: CaseStatus;
  createdAt: string;
}
