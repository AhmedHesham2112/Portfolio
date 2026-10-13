import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import { ProfileHeader } from './ProfileHeader';
import { SkillBadges } from './SkillBadges';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ProjectsSection } from './ProjectsSection';
import { EducationSection } from './EducationSection';
import { Layers } from 'lucide-react';

interface ProfileDashboardProps {
  resumePdfUrl?: string;
}

export const ProfileDashboard: React.FC<ProfileDashboardProps> = ({ resumePdfUrl }) => {
  const { profile } = useProfile();

  return (
    <div className="space-y-10">
      {/* Profile Hero Header with Direct Resume PDF Link */}
      <div id="about">
        <ProfileHeader
          resumePdfUrl={resumePdfUrl}
        />
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Summary, Projects, Experience, Skills */}
        <div className="lg:col-span-2 space-y-10">
          {/* Executive Summary Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/60">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                About Me
              </h2>
              {/* <button
                onClick={() => setIsEditOpen(true)}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 flex items-center gap-1 transition font-medium"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button> */}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              {profile.summary}
            </p>
          </div>

          {/* Featured Portfolio Projects (SBS Broker App, Web Canvas Tool, Marcomz.ai, WatchMate) */}
          <div id="projects">
            <ProjectsSection />
          </div>

          {/* Work Experience Timeline */}
          <div id="experience">
            <ExperienceTimeline />
          </div>

          {/* Interactive Skill Badges with Search & Category Filters */}
          <div id="skills">
            <SkillBadges />
          </div>
        </div>

        {/* Right 1 Column: Education, Certs, Languages */}
        <div className="space-y-10" id="education">
          <EducationSection />
        </div>
      </div>
    </div>
  );
};
