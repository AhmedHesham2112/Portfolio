import React, { useState } from 'react';
import { useProfile } from '../../hooks/useProfile';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Smartphone, 
  Palette, 
  Globe, 
  Layers 
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { profile } = useProfile();
  const [filterCategory, setFilterCategory] = useState<'all' | 'mobile' | 'canvas' | 'web' | 'fullstack'>('all');

  const filteredProjects = profile.projects.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case 'mobile':
        return {
          label: 'React Native Mobile',
          icon: Smartphone,
          className: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30'
        };
      case 'canvas':
        return {
          label: 'Canvas Graphics (Konva.js)',
          icon: Palette,
          className: 'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30'
        };
      case 'web':
        return {
          label: 'Web Application',
          icon: Globe,
          className: 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-cyan-500/30'
        };
      default:
        return {
          label: 'Fullstack / Web',
          icon: Layers,
          className: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30'
        };
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-6">
      {/* Header and Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200/80 dark:border-slate-800/60">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            Featured Production Projects
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Real-world applications spanning React, React Native (Expo), and HTML5 Canvas engines.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'canvas', label: 'Canvas / Graphics' },
            { key: 'mobile', label: 'React Native Mobile' },
            { key: 'web', label: 'Web & Enterprise' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilterCategory(cat.key as any)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                filterCategory === cat.key
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/25'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((proj) => {
          const catInfo = getCategoryBadge(proj.category);
          const CatIcon = catInfo.icon;

          return (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-500/40 dark:hover:border-cyan-500/40 hover:bg-white dark:hover:bg-slate-900 transition-all duration-200 space-y-4 shadow-xs hover:shadow-md group"
            >
              {/* Project Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800/60">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition">
                      {proj.name}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${catInfo.className}`}
                    >
                      <CatIcon className="w-3 h-3" />
                      {catInfo.label}
                    </span>
                  </div>

                  {proj.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-0.5">
                      {proj.description}
                    </p>
                  )}
                </div>

                {/* Live Demo & Source Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {proj.live_url && (
                    <a
                      href={proj.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white flex items-center gap-1.5 transition shadow-sm shadow-indigo-500/20"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {proj.github_url && (
                    <a
                      href={proj.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {proj.tech_stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-indigo-50 dark:bg-cyan-950/40 text-indigo-700 dark:text-cyan-300 border border-indigo-200/80 dark:border-cyan-800/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights List */}
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                {proj.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
