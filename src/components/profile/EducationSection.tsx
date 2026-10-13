import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import { GraduationCap, Award, Languages, ExternalLink, ShieldCheck } from 'lucide-react';
import { CertificationItem } from '../../types/profile';

export const EducationSection: React.FC = () => {
  const { profile } = useProfile();

  return (
    <div className="space-y-6">
      {/* Education Cards */}
      <div className="glass-card rounded-2xl p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
          Education
        </h2>

        <div className="space-y-4 divide-y divide-slate-200/80 dark:divide-slate-800">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="pt-3 first:pt-0 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{edu.degree}</p>
                {edu.certificate_url && (
                  <a
                    href={edu.certificate_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-cyan-400 hover:underline"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              {edu.institution && (
                <p className="text-xs text-indigo-600 dark:text-cyan-400/90 font-semibold">{edu.institution}</p>
              )}
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{edu.period}</p>
              {edu.details && (
                <p className="text-xs text-slate-600 dark:text-slate-300 pt-0.5 leading-relaxed">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Languages */}
      <div className="glass-card rounded-2xl p-6 space-y-5">
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            Certifications & Verified Credentials
          </h2>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {profile.certifications.map((c, idx) => {
              const isObj = typeof c === 'object' && c !== null;
              const certName = isObj ? (c as CertificationItem).name : (c as string);
              const certUrl = isObj ? (c as CertificationItem).url : undefined;
              const certIssuer = isObj ? (c as CertificationItem).issuer : undefined;

              return (
                <li
                  key={idx}
                  className="flex items-center justify-between gap-2 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition"
                >
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{certName}</span>
                      {certIssuer && (
                        <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{certIssuer}</span>
                      )}
                    </div>
                  </div>
                  {certUrl && (
                    <a
                      href={certUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-indigo-700 dark:text-cyan-300 text-[11px] font-semibold border border-indigo-200 dark:border-cyan-500/30 flex items-center gap-1 transition flex-shrink-0"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <Languages className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((lang, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              >
                <span className="font-semibold text-slate-900 dark:text-slate-100">{lang.language}</span>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span className="text-indigo-600 dark:text-cyan-400 text-[11px] font-medium">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
