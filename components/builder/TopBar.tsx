import { Download, CheckCircle2 } from 'lucide-react';

interface TopBarProps {
  onPrint: () => void;
  onAtsCheck: () => void;
}

export function TopBar({ onPrint, onAtsCheck }: TopBarProps) {
  return (
    <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between no-print">
      <div className="text-sm font-medium text-slate-500">
        Changes saved locally
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onAtsCheck}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100 transition-colors border border-primary-200"
        >
          <CheckCircle2 className="w-4 h-4" />
          ATS Check
        </button>
        <button
          onClick={onPrint}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export PDF
        </button>
      </div>
    </div>
  );
}
