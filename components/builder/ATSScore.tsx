import { useState, useMemo } from 'react';
import { ResumeData } from '@/types/resume';
import { calculateATSScore } from '@/lib/ats-scorer';
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';

interface ATSScoreProps {
  data: ResumeData;
  onClose: () => void;
}

export function ATSScore({ data, onClose }: ATSScoreProps) {
  const [jobDescription, setJobDescription] = useState('');

  const result = useMemo(() => calculateATSScore(data, jobDescription), [data, jobDescription]);

  let scoreColor = 'text-red-600';
  let scoreBg = 'bg-red-50 border-red-200';
  if (result.score >= 80) {
    scoreColor = 'text-green-600';
    scoreBg = 'bg-green-50 border-green-200';
  } else if (result.score >= 60) {
    scoreColor = 'text-yellow-600';
    scoreBg = 'bg-yellow-50 border-yellow-200';
  }

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl border-l border-slate-200 flex flex-col z-50 transform transition-transform duration-300">
      <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary-600" />
          ATS Checker
        </h2>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
          <XCircle className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className={`mb-6 p-6 rounded-xl border text-center ${scoreBg}`}>
          <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">Overall Score</div>
          <div className={`text-5xl font-extrabold ${scoreColor}`}>
            {result.score} <span className="text-2xl font-normal text-slate-400">/ 100</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            {result.score >= 80 ? "Looks great! You're ready to apply." :
             result.score >= 60 ? "Good start, but room for improvement." :
             "Needs work. Follow the suggestions below."}
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-800 mb-2">Job Description (Optional)</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here to check keyword match..."
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm h-32"
          />
        </div>

        <div className="space-y-6">
          {result.warnings.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3 border-b border-slate-200 pb-1">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                Suggestions to Improve
              </h3>
              <ul className="space-y-2">
                {result.warnings.map((warning, i) => (
                  <li key={i} className="text-sm text-slate-700 flex items-start gap-2 bg-yellow-50/50 p-2 rounded border border-yellow-100">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    {warning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.positiveFindings.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3 border-b border-slate-200 pb-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                What You Did Well
              </h3>
              <ul className="space-y-2">
                {result.positiveFindings.map((finding, i) => (
                  <li key={i} className="text-sm text-slate-700 flex items-start gap-2 bg-green-50/50 p-2 rounded border border-green-100">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 bg-blue-50 p-3 rounded-lg flex items-start gap-3 border border-blue-100">
          <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">
            This score is advisory. ATS systems vary widely, but following these best practices improves your chances of passing automated screens.
          </p>
        </div>
      </div>
    </div>
  );
}
