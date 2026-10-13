import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import { Briefcase, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { profile } = useProfile();

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/60">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
          Work Experience & Production Impact
        </h2>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          {profile.experience.length} Engineering Roles
        </span>
      </div>

      <div className="space-y-6 divide-y divide-slate-200/80 dark:divide-slate-800/80">
        {profile.experience.map((exp) => (
          <div key={exp.id} className="pt-6 first:pt-0 space-y-3.5">
            {/* Role & Company Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{exp.role}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-cyan-400">{exp.company}</span>
                  {exp.company_url && (
                    <a
                      href={exp.company_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-300 flex items-center gap-1 transition"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 w-fit">
                <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Projects mentioned */}
            {exp.projects && exp.projects.length > 0 && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Key Projects:</span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.projects.map((proj, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 dark:bg-cyan-500/10 text-indigo-700 dark:text-cyan-300 border border-indigo-200/80 dark:border-cyan-500/20"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            {exp.tech_stack && (
              <div className="flex flex-wrap gap-1.5">
                {exp.tech_stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Achievements & Responsibilities */}
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              {exp.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
