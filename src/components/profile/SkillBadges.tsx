import React, { useState } from 'react';
import { useProfile } from '../../hooks/useProfile';
import { CheckCircle2, Search } from 'lucide-react';

type SkillCategoryKey = 'all' | 'frontend_core' | 'state_and_data' | 'canvas_and_graphics' | 'languages_and_tools';

export const SkillBadges: React.FC = () => {
  const { profile } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'frontend_core', label: 'Frontend & Mobile' },
    { key: 'state_and_data', label: 'State & Data' },
    { key: 'canvas_and_graphics', label: 'Graphics & Canvas' },
    { key: 'languages_and_tools', label: 'Languages & Tools' },
  ];

  const allSkillsWithCategories = [
    ...profile.technical_skills.frontend_core.map(name => ({ 
      name, 
      category: 'frontend_core' as const, 
      badgeStyle: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/40' 
    })),
    ...profile.technical_skills.state_and_data.map(name => ({ 
      name, 
      category: 'state_and_data' as const, 
      badgeStyle: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/40' 
    })),
    ...profile.technical_skills.canvas_and_graphics.map(name => ({ 
      name, 
      category: 'canvas_and_graphics' as const, 
      badgeStyle: 'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/40' 
    })),
    ...profile.technical_skills.languages.map(name => ({ 
      name, 
      category: 'languages_and_tools' as const, 
      badgeStyle: 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700/60' 
    })),
    ...profile.technical_skills.tools_and_platforms.map(name => ({ 
      name, 
      category: 'languages_and_tools' as const, 
      badgeStyle: 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700/60' 
    })),
  ];

  const filteredSkills = allSkillsWithCategories.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/80 dark:border-slate-800/60">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          Technical Skills & Taxonomy
        </h2>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          {filteredSkills.length} of {allSkillsWithCategories.length} skills listed
        </span>
      </div>

      {/* Controls: Search and Categories */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter skills (e.g. React, Redux, Canvas)..."
            className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as SkillCategoryKey)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                selectedCategory === cat.key
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/25'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Badges Flow */}
      <div className="flex flex-wrap gap-2 pt-1">
        {filteredSkills.map((skill, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 shadow-2xs transition hover:scale-105 ${skill.badgeStyle}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
