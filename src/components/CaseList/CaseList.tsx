import React, { useMemo, useState } from "react";
import type { Case } from "../../types";
import { SortIcon } from "../ui/SortIcon";
import CaseItem from "./CaseItem";

interface CaseListProps {
  cases: Case[];
  onSelectCase: (id: string) => void;
}

const CaseList: React.FC<CaseListProps> = ({ cases, onSelectCase }) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedCases = useMemo(() => {
    return [...cases].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [cases, sortOrder]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };
  return (
    <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full max-h-[600px]">
      {/* Header bar with sort control */}
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Patient List
        </span>
        <button
          onClick={toggleSort}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors bg-white border border-slate-200 hover:border-blue-200 rounded px-2.5 py-1.5 shadow-sm"
          title={`Sort by Date ${
            sortOrder === "asc" ? "(Oldest First)" : "(Newest First)"
          }`}
        >
          <span>Date</span>
          <SortIcon order={sortOrder} />
        </button>
      </div>

      <div className="overflow-y-auto divide-y divide-slate-100">
        {sortedCases.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No cases found.</div>
        ) : (
          sortedCases.map((patientCase) => (
            <CaseItem patientCase={patientCase} onSelectCase={onSelectCase} />
          ))
        )}
      </div>
    </div>
  );
};

export default CaseList;
