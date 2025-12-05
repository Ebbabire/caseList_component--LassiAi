import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Case } from "@/types";

interface CaseDetailProps {
  caseData: Case;
}

const CaseDetail = ({ caseData }: CaseDetailProps) => {
  return (
    <div className="h-full bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col overflow-hidden animate-in fade-in duration-300">
      {/* Detail Header */}
      <div className="px-6 py-5 bg-white border-b border-slate-100">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-slate-900">
                {caseData.name}
              </h1>
              <StatusBadge status={caseData.status} />
            </div>
            <p className="text-sm text-slate-500 font-medium">
              {caseData.species} • {caseData.age} • Case #{caseData.id}
            </p>
          </div>
          <div className="text-right">
            <span className="block text-xs text-slate-400 uppercase tracking-wide">
              Created
            </span>
            <span className="text-sm font-medium text-slate-700">
              {caseData.createdAt}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/30">
        {/* Key Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <span className="block text-xs text-slate-400 uppercase tracking-wide mb-1">
              Owner
            </span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                {caseData.owner.charAt(0)}
              </div>
              <span className="font-medium text-slate-900">
                {caseData.owner}
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <span className="block text-xs text-slate-400 uppercase tracking-wide mb-1">
              Reason for Visit
            </span>
            <p
              className="font-medium text-slate-900 line-clamp-2"
              title={caseData.complaint}
            >
              {caseData.complaint}
            </p>
          </div>
        </div>

        {/* Clinical Summary Shell */}
        <div>
          <SectionHeader title="Clinical Summary" />
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm min-h-[120px]">
            <textarea
              placeholder="Start typing clinical notes, observations, or import lab results..."
              className="w-full h-32 resize-none border border-slate-200 rounded-md p-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Planned Actions Shell */}
        <div>
          <SectionHeader title="Planned Actions" />
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-md opacity-60">
              <div className="w-4 h-4 rounded border border-slate-300"></div>
              <span className="text-sm text-slate-500">
                Schedule follow-up appointment
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-md opacity-60">
              <div className="w-4 h-4 rounded border border-slate-300"></div>
              <span className="text-sm text-slate-500">
                Review blood work results
              </span>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-2">
              + Add Action Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
