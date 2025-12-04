import type { Case } from "@/types";

export const mockCases: Case[] = [
  {
    id: "C-2023-001",
    species: "Canine",
    name: "Bella",
    complaint: "Acute vomiting and lethargy for 24 hours, refusal to eat.",
    status: "In Progress",
    createdAt: "2023-10-24",
  },
  {
    id: "C-2023-002",
    species: "Feline",
    name: "Luna",
    complaint: "Routine vaccination and annual checkup.",
    status: "Completed",
    createdAt: "2023-10-23",
  },
  {
    id: "C-2023-003",
    species: "Canine",
    name: "Max",
    complaint: "Limping on hind left leg after park activity.",
    status: "New",
    createdAt: "2023-10-25",
  },
  {
    id: "C-2023-004",
    species: "Avian",
    name: "Tweety",
    complaint: "Feather plucking and behavioral changes.",
    status: "New",
    createdAt: "2023-10-25",
  },
  {
    id: "C-2023-005",
    species: "Feline",
    name: "Oliver",
    complaint: "Dental cleaning follow-up, gum redness noted.",
    status: "Completed",
    createdAt: "2023-10-20",
  },
];
