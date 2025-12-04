import { useState } from "react";
import CaseList from "./CaseList";
import { mockCases } from "./mockCases";

const CaseListDemo: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelectCase = (id: string) => {
    console.log(`Selected Case ID: ${id}`);
    setSelectedId(id);
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Clinical Cases
        </h1>
        <p className="text-slate-500">
          Select a patient from the list below to view detailed records.
        </p>
      </div>

      <CaseList cases={mockCases} onSelectCase={handleSelectCase} />

      {/* log selected id for demo purposes */}
      <div className="mt-6 p-4 bg-slate-100 rounded-md border border-slate-200">
        <span className="text-sm font-medium text-slate-700">
          Selected Case:{" "}
        </span>
        {selectedId ? (
          <span className="text-sm font-mono text-blue-600">
            User clicked case ID: {selectedId}
          </span>
        ) : (
          <span className="text-sm text-slate-400 italic">
            Click a row to select a case...
          </span>
        )}
      </div>
    </div>
  );
};

export default CaseListDemo;
