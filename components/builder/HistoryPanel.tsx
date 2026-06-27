import { History, XCircle, RefreshCw, Trash2, SplitSquareHorizontal } from 'lucide-react';
import { useResumeStore } from '@/lib/store';
import { ResumeVersion } from '@/types/resume';

interface HistoryPanelProps {
  onClose: () => void;
  onCompare: (version: ResumeVersion) => void;
}

export function HistoryPanel({ onClose, onCompare }: HistoryPanelProps) {
  const { versions, restoreVersion, removeVersion, saveVersion } = useResumeStore();

  const handleRestore = (id: string) => {
    if (confirm('Are you sure you want to restore this version? Your current unsaved changes will be lost.')) {
      restoreVersion(id);
      onClose();
    }
  };

  const handleManualSave = () => {
    saveVersion();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl border-l border-slate-200 flex flex-col z-50 transform transition-transform duration-300">
      <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <History className="w-5 h-5 text-primary-600" />
          Version History
        </h2>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
          <XCircle className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 border-b border-slate-100 flex justify-center">
        <button
          onClick={handleManualSave}
          className="w-full py-2 bg-primary-50 text-primary-700 font-medium rounded-md hover:bg-primary-100 transition-colors"
        >
          Save Current Version Now
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {versions.length === 0 ? (
          <div className="text-center py-10 text-slate-500">
            <History className="w-10 h-10 mx-auto text-slate-300 mb-3" />
            <p>No saved versions yet.</p>
            <p className="text-sm mt-1">We auto-save every minute of inactivity, or you can save manually above.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {versions.map((version) => {
              const date = new Date(version.timestamp);
              return (
                <div key={version.id} className="p-4 border border-slate-200 rounded-lg bg-white shadow-sm hover:border-primary-200 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-semibold text-slate-800">
                        {date.toLocaleDateString()}
                      </div>
                      <div className="text-xs text-slate-500">
                        {date.toLocaleTimeString()}
                      </div>
                    </div>
                    <button
                      onClick={() => removeVersion(version.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                      title="Delete version"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => handleRestore(version.id)}
                      className="flex-1 inline-flex justify-center items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Restore
                    </button>
                    <button
                      onClick={() => onCompare(version)}
                      className="flex-1 inline-flex justify-center items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary-700 bg-primary-50 rounded hover:bg-primary-100 transition-colors"
                    >
                      <SplitSquareHorizontal className="w-3.5 h-3.5" />
                      Compare
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
