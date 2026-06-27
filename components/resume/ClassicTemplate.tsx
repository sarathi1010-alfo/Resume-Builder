import { ResumeData } from '@/types/resume';

interface ClassicTemplateProps {
  data: ResumeData;
  layoutMode?: 'ats' | 'human';
}

export function ClassicTemplate({ data, layoutMode = 'ats' }: ClassicTemplateProps) {
  const hasContact = data.contact.name || data.contact.email || data.contact.phone;
  const skillsList = data.skills.split(',').map(s => s.trim()).filter(Boolean);

  const isHuman = layoutMode === 'human';

  return (
    <div className={`w-full h-full bg-white ${isHuman ? 'p-10 md:p-16 text-slate-800' : 'p-8 md:p-12 text-slate-900'} ${isHuman ? 'font-serif' : 'font-sans'}`} style={{ minHeight: '1056px' }}>
      {/* Header / Contact */}
      {hasContact && (
        <header className={`${isHuman ? 'border-b border-primary-200 pb-8 mb-8 text-left flex flex-col gap-2' : 'border-b-2 border-slate-800 pb-6 mb-6 text-center'}`}>
          <h1 className={`${isHuman ? 'text-4xl md:text-5xl font-light text-primary-900' : 'text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2 text-slate-900'}`}>
            {data.contact.name || 'Your Name'}
          </h1>
          <div className={`flex flex-wrap ${isHuman ? 'justify-start gap-x-6 gap-y-2 text-base text-slate-500' : 'justify-center gap-x-4 gap-y-1 text-sm text-slate-600'}`}>
            {data.contact.email && <span>{data.contact.email}</span>}
            {data.contact.email && data.contact.phone && <span className="text-slate-300">•</span>}
            {data.contact.phone && <span>{data.contact.phone}</span>}
            {data.contact.phone && data.contact.location && <span className="text-slate-300">•</span>}
            {data.contact.location && <span>{data.contact.location}</span>}

            {(data.contact.linkedin || data.contact.website) && (
              <div className={`w-full mt-1 flex ${isHuman ? 'justify-start gap-x-6' : 'justify-center gap-x-4'}`}>
                {data.contact.linkedin && <span>{data.contact.linkedin}</span>}
                {data.contact.linkedin && data.contact.website && <span className="text-slate-300">•</span>}
                {data.contact.website && <span>{data.contact.website}</span>}
              </div>
            )}
          </div>
        </header>
      )}

      {/* Summary */}
      {data.summary && (
        <section className={`${isHuman ? 'mb-8' : 'mb-6'}`}>
          <h2 className={`${isHuman ? 'text-xl font-medium text-primary-800 mb-3' : 'text-lg font-bold uppercase tracking-widest text-primary-700 mb-2 border-b border-slate-200 pb-1'}`}>
            Professional Summary
          </h2>
          <p className={`${isHuman ? 'text-base leading-relaxed text-slate-600' : 'text-sm leading-relaxed text-slate-700'}`}>
            {data.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className={`${isHuman ? 'mb-8' : 'mb-6'}`}>
          <h2 className={`${isHuman ? 'text-xl font-medium text-primary-800 mb-4' : 'text-lg font-bold uppercase tracking-widest text-primary-700 mb-3 border-b border-slate-200 pb-1'}`}>
            Experience
          </h2>
          <div className={`${isHuman ? 'space-y-8' : 'space-y-5'}`}>
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={`${isHuman ? 'font-semibold text-slate-900 text-lg' : 'font-bold text-slate-800 text-base'}`}>{exp.position}</h3>
                  <span className={`${isHuman ? 'text-base text-slate-500 italic' : 'text-sm font-medium text-slate-600'} whitespace-nowrap ml-4`}>
                    {exp.startDate} {exp.startDate && exp.endDate ? '–' : ''} {exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className={`${isHuman ? 'text-base font-medium text-primary-600' : 'text-sm font-medium text-primary-600'}`}>{exp.company}</span>
                  <span className={`${isHuman ? 'text-base text-slate-400' : 'text-sm text-slate-500'}`}>{exp.location}</span>
                </div>
                {exp.description && (
                  <ul className={`list-disc list-outside ml-4 ${isHuman ? 'space-y-2 text-base text-slate-600' : 'space-y-1 text-sm text-slate-700'}`}>
                    {exp.description.split('\n').filter(Boolean).map((bullet, i) => (
                      <li key={i} className="pl-1 leading-snug">{bullet.replace(/^[-•]\s*/, '')}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className={`${isHuman ? 'mb-8' : 'mb-6'}`}>
          <h2 className={`${isHuman ? 'text-xl font-medium text-primary-800 mb-4' : 'text-lg font-bold uppercase tracking-widest text-primary-700 mb-3 border-b border-slate-200 pb-1'}`}>
            Education
          </h2>
          <div className={`${isHuman ? 'space-y-6' : 'space-y-4'}`}>
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={`${isHuman ? 'font-semibold text-slate-900 text-lg' : 'font-bold text-slate-800 text-base'}`}>{edu.institution}</h3>
                  <span className={`${isHuman ? 'text-base text-slate-500 italic' : 'text-sm font-medium text-slate-600'} whitespace-nowrap ml-4`}>
                    {edu.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className={`${isHuman ? 'text-base text-slate-600' : 'text-sm text-slate-700'}`}>
                    {edu.degree}{edu.field ? ` in ${edu.field}` : ''}
                  </span>
                  {edu.score && <span className={`${isHuman ? 'text-base text-slate-400' : 'text-sm text-slate-500'}`}>{edu.score}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <section>
          <h2 className={`${isHuman ? 'text-xl font-medium text-primary-800 mb-3' : 'text-lg font-bold uppercase tracking-widest text-primary-700 mb-2 border-b border-slate-200 pb-1'}`}>
            Skills
          </h2>
          <div className={`${isHuman ? 'text-base text-slate-600 leading-relaxed flex flex-wrap gap-2' : 'text-sm text-slate-700 leading-relaxed'}`}>
            {isHuman ? skillsList.map((skill, i) => (
              <span key={i} className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700">{skill}</span>
            )) : skillsList.join(' • ')}
          </div>
        </section>
      )}
    </div>
  );
}
