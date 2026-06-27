'use client';

import { useResumeStore } from '@/lib/store';
import { SectionCard } from './SectionCard';
import { ContactForm } from './forms/ContactForm';
import { ClassicTemplate } from '@/components/resume/ClassicTemplate';
import { TopBar } from './TopBar';
import { ATSScore } from './ATSScore';
import { HistoryPanel } from './HistoryPanel';
import { ResumeVersion } from '@/types/resume';
import { useState, useEffect } from 'react';

export function EditorShell() {
  const store = useResumeStore();
  const [mounted, setMounted] = useState(false);
  const [showAts, setShowAts] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [compareVersion, setCompareVersion] = useState<ResumeVersion | null>(null);
  const [layoutMode, setLayoutMode] = useState<'ats' | 'human'>('ats');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-8 text-center text-slate-500">Loading editor...</div>;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] relative overflow-hidden">
      <TopBar
        onPrint={handlePrint}
        onAtsCheck={() => setShowAts(true)}
        onHistoryOpen={() => setShowHistory(true)}
      />

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden relative">
        {/* Left side: Editor */}
        <div className="w-full lg:w-1/2 h-full overflow-y-auto bg-slate-100 p-4 md:p-6 no-print">
          <div className="max-w-2xl mx-auto pb-20">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Resume Details</h1>

            <SectionCard title="Contact Information" defaultOpen={true}>
              <ContactForm data={store.data.contact} updateData={store.updateContact} />
            </SectionCard>

            <SectionCard title="Professional Summary" defaultOpen={false}>
              <textarea
                value={store.data.summary}
                onChange={(e) => store.updateSummary(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Brief overview of your experience and goals..."
              />
            </SectionCard>

            <SectionCard title="Experience" defaultOpen={false}>
              {store.data.experience.map((exp, index) => (
                <div key={exp.id} className="mb-6 pb-6 border-b border-slate-200 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-slate-800">Experience #{index + 1}</h3>
                    <button
                      onClick={() => store.removeExperience(exp.id)}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => store.updateExperience(exp.id, { company: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => store.updateExperience(exp.id, { position: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => store.updateExperience(exp.id, { startDate: e.target.value })}
                        placeholder="e.g. Jan 2020"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => store.updateExperience(exp.id, { endDate: e.target.value })}
                        placeholder="e.g. Present"
                        disabled={exp.current}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md disabled:bg-slate-100 disabled:text-slate-400"
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      type="checkbox"
                      id={`current-${exp.id}`}
                      checked={exp.current}
                      onChange={(e) => store.updateExperience(exp.id, { current: e.target.checked, endDate: e.target.checked ? 'Present' : exp.endDate })}
                      className="mr-2"
                    />
                    <label htmlFor={`current-${exp.id}`} className="text-sm text-slate-700">I currently work here</label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Description (Bullets, separated by newlines)</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => store.updateExperience(exp.id, { description: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      placeholder="• Achieved X by doing Y..."
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={store.addExperience}
                className="w-full py-2 border-2 border-dashed border-slate-300 text-slate-600 rounded-md hover:bg-slate-50 hover:border-slate-400 transition-colors font-medium"
              >
                + Add Experience
              </button>
            </SectionCard>

            <SectionCard title="Education" defaultOpen={false}>
              {store.data.education.map((edu, index) => (
                <div key={edu.id} className="mb-6 pb-6 border-b border-slate-200 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-slate-800">Education #{index + 1}</h3>
                    <button
                      onClick={() => store.removeEducation(edu.id)}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Institution</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => store.updateEducation(edu.id, { institution: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => store.updateEducation(edu.id, { degree: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Field of Study</label>
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => store.updateEducation(edu.id, { field: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Graduation Date</label>
                      <input
                        type="text"
                        value={edu.endDate}
                        onChange={(e) => store.updateEducation(edu.id, { endDate: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={store.addEducation}
                className="w-full py-2 border-2 border-dashed border-slate-300 text-slate-600 rounded-md hover:bg-slate-50 hover:border-slate-400 transition-colors font-medium"
              >
                + Add Education
              </button>
            </SectionCard>

            <SectionCard title="Skills" defaultOpen={false}>
              <textarea
                value={store.data.skills}
                onChange={(e) => store.updateSkills(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="JavaScript, React, Project Management..."
              />
              <p className="text-xs text-slate-500 mt-2">Separate skills with commas.</p>
            </SectionCard>
          </div>
        </div>

        {/* Right side: Preview */}
        <div className={`w-full lg:w-1/2 h-full bg-slate-200/50 p-4 md:p-8 overflow-y-auto flex flex-col items-center border-l border-slate-200 print:block print:w-full print:bg-white print:p-0 print:m-0 print:border-none print:overflow-visible relative ${compareVersion ? 'lg:w-3/4 flex-row items-start gap-4' : ''}`}>

          <div className="mb-4 flex flex-col items-center gap-4 w-full no-print">
            {compareVersion && (
              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg flex items-center justify-between w-full max-w-[850px]">
                <div className="text-sm text-yellow-800">
                  <span className="font-semibold">Comparing with:</span> {new Date(compareVersion.timestamp).toLocaleString()}
                </div>
                <button
                  onClick={() => setCompareVersion(null)}
                  className="text-sm font-medium text-yellow-900 bg-yellow-200 px-3 py-1 rounded hover:bg-yellow-300 transition-colors"
                >
                  Exit Comparison
                </button>
              </div>
            )}

            <div className="flex bg-slate-300 p-1 rounded-lg">
              <button
                onClick={() => setLayoutMode('ats')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${layoutMode === 'ats' ? 'bg-white text-primary-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                ATS-Optimized
              </button>
              <button
                onClick={() => setLayoutMode('human')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${layoutMode === 'human' ? 'bg-white text-primary-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Human-Friendly
              </button>
            </div>
          </div>

          <div className={`w-full flex ${compareVersion ? 'flex-col xl:flex-row gap-6 items-start justify-center' : 'justify-center'} print:block print:w-full`}>
            {/* Current Version */}
            <div className="w-full max-w-[850px] shadow-2xl bg-white print:shadow-none print:max-w-none flex-shrink-0 relative">
              {compareVersion && <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center text-xs font-bold py-1 z-10 no-print">Current Version</div>}
              <div className={compareVersion ? 'pt-6' : ''}>
                <ClassicTemplate data={store.data} layoutMode={layoutMode} />
              </div>
            </div>

            {/* Compare Version */}
            {compareVersion && (
              <div className="w-full max-w-[850px] shadow-xl border-4 border-yellow-400 bg-white print:hidden flex-shrink-0 relative opacity-90">
                <div className="absolute top-0 left-0 right-0 bg-yellow-500 text-yellow-900 text-center text-xs font-bold py-1 z-10">
                  Previous Version ({new Date(compareVersion.timestamp).toLocaleString()})
                </div>
                <div className="pt-6">
                  <ClassicTemplate data={compareVersion.data} layoutMode={layoutMode} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ATS Overlay */}
        {showAts && (
          <>
            <div
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setShowAts(false)}
            />
            <div className="absolute inset-y-0 right-0 z-50">
              <ATSScore data={store.data} onClose={() => setShowAts(false)} />
            </div>
          </>
        )}

        {/* History Overlay */}
        {showHistory && (
          <>
            <div
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setShowHistory(false)}
            />
            <div className="absolute inset-y-0 right-0 z-50">
              <HistoryPanel
                onClose={() => setShowHistory(false)}
                onCompare={(v) => {
                  setCompareVersion(v);
                  setShowHistory(false);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
