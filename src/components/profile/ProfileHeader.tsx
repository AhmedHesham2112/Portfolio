import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import { 
  User, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Code2, 
  Smartphone, 
  Github, 
  Linkedin,
  CheckCircle2,
  // Edit3,
  Download,
  ExternalLink
} from 'lucide-react';

interface ProfileHeaderProps {
  onOpenEdit?: () => void;
  resumePdfUrl?: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ resumePdfUrl }) => {
  const { profile } = useProfile();
  const pdfUrl = resumePdfUrl || "https://drive.google.com/file/d/1QMiu2THjXEVTN8fYv0vFzj0UMjBhNTxU/view?usp=drive_link";

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Profile Avatar & Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 flex-shrink-0">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
              <User className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 dark:text-cyan-400" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {profile.personal.name}
              </h1>
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Available for Roles
              </span>
            </div>

            <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-cyan-300 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
              {profile.personal.title || "Frontend Software Engineer | React & React Native"}
            </p>

            {/* Contact & Social Strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                {profile.personal.location}
              </span>
              <a
                href={`mailto:${profile.personal.email}`}
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300 transition"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                {profile.personal.email}
              </a>
              <a
                href={`tel:${profile.personal.phone}`}
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300 transition"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                {profile.personal.phone}
              </a>
              {profile.personal.links.github && (
                <a
                  href={profile.personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 dark:hover:border-cyan-500/40 transition font-medium shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              )}
              {profile.personal.links.linkedin && (
                <a
                  href={profile.personal.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition font-medium shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Action Controls & Fast Navigation */}
        <div className="flex flex-col items-start lg:items-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white flex items-center gap-1.5 transition shadow-md shadow-indigo-500/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            {/* {onOpenEdit && (
              <button
                onClick={onOpenEdit}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Info</span>
              </button>
            )} */}
          </div>

          {/* Target Role Tags */}
          <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end max-w-md">
            {profile.target_roles.map((role, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5"
              >
                {role.includes('Mobile') ? (
                  <Smartphone className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Code2 className="w-3 h-3 text-indigo-600 dark:text-cyan-400" />
                )}
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
