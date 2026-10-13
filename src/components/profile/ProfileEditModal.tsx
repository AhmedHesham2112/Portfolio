import React, { useState } from 'react';
import { useProfile } from '../../hooks/useProfile';
import { CandidateProfile, TechnicalSkills } from '../../types/profile';
import { X, Plus, Trash2, Check, UserCheck, Sparkles } from 'lucide-react';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SkillCategory = keyof TechnicalSkills;

export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ isOpen, onClose }) => {
  const { profile, updateProfile } = useProfile();
  const [formData, setFormData] = useState<CandidateProfile>(profile);
  const [newSkillText, setNewSkillText] = useState('');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<SkillCategory>('frontend_core');
  const [newTargetRole, setNewTargetRole] = useState('');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    onClose();
  };

  const handleAddSkill = () => {
    const trimmed = newSkillText.trim();
    if (!trimmed) return;
    if (formData.technical_skills[selectedSkillCategory].includes(trimmed)) return;

    setFormData((prev) => ({
      ...prev,
      technical_skills: {
        ...prev.technical_skills,
        [selectedSkillCategory]: [...prev.technical_skills[selectedSkillCategory], trimmed],
      },
    }));
    setNewSkillText('');
  };

  const handleRemoveSkill = (category: SkillCategory, skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      technical_skills: {
        ...prev.technical_skills,
        [category]: prev.technical_skills[category].filter((s) => s !== skillToRemove),
      },
    }));
  };

  const handleAddTargetRole = () => {
    const trimmed = newTargetRole.trim();
    if (!trimmed || formData.target_roles.includes(trimmed)) return;
    setFormData((prev) => ({
      ...prev,
      target_roles: [...prev.target_roles, trimmed],
    }));
    setNewTargetRole('');
  };

  const handleRemoveTargetRole = (roleToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      target_roles: prev.target_roles.filter((r) => r !== roleToRemove),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-200 dark:border-cyan-500/20 flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Edit Candidate Profile</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Update your bio, contact links, skills, and target roles</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Personal Info Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">Personal & Contact Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.personal.name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personal: { ...prev.personal, name: e.target.value },
                    }))
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.personal.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personal: { ...prev.personal, email: e.target.value },
                    }))
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                <input
                  type="text"
                  value={formData.personal.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personal: { ...prev.personal, phone: e.target.value },
                    }))
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.personal.location}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personal: { ...prev.personal, location: e.target.value },
                    }))
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">GitHub URL</label>
                <input
                  type="url"
                  value={formData.personal.links.github || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personal: {
                        ...prev.personal,
                        links: { ...prev.personal.links, github: e.target.value },
                      },
                    }))
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  value={formData.personal.links.linkedin || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personal: {
                        ...prev.personal,
                        links: { ...prev.personal.links, linkedin: e.target.value },
                      },
                    }))
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">Professional Summary</h3>
            <textarea
              value={formData.summary}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, summary: e.target.value }))
              }
              rows={4}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition leading-relaxed"
            />
          </div>

          {/* Target Roles */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">Target Job Titles</h3>
            <div className="flex flex-wrap gap-2">
              {formData.target_roles.map((role, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                >
                  <span>{role}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTargetRole(role)}
                    className="text-slate-400 hover:text-rose-500 transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTargetRole}
                onChange={(e) => setNewTargetRole(e.target.value)}
                placeholder="e.g. Senior React Developer"
                className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
              <button
                type="button"
                onClick={handleAddTargetRole}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1 transition"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Role
              </button>
            </div>
          </div>

          {/* Skills Management */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">Manage Technical Skills</h3>
            
            {/* Add skill input */}
            <div className="flex flex-col sm:flex-row gap-2 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <select
                value={selectedSkillCategory}
                onChange={(e) => setSelectedSkillCategory(e.target.value as SkillCategory)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="frontend_core">Frontend & Mobile</option>
                <option value="state_and_data">State & Data Management</option>
                <option value="canvas_and_graphics">Graphics & Canvas</option>
                <option value="languages">Languages</option>
                <option value="tools_and_platforms">Tools & Platforms</option>
              </select>

              <input
                type="text"
                value={newSkillText}
                onChange={(e) => setNewSkillText(e.target.value)}
                placeholder="Add skill (e.g. Next.js, GraphQL, Docker)"
                className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
              />

              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1.5 transition shadow-sm shadow-indigo-500/20"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Skill</span>
              </button>
            </div>

            {/* Existing Skills list by category */}
            <div className="space-y-3 pt-2">
              {(
                [
                  { key: 'frontend_core', title: 'Frontend & Mobile' },
                  { key: 'state_and_data', title: 'State & Data Management' },
                  { key: 'canvas_and_graphics', title: 'Graphics & Canvas' },
                  { key: 'languages', title: 'Languages' },
                  { key: 'tools_and_platforms', title: 'Tools & Platforms' },
                ] as { key: SkillCategory; title: string }[]
              ).map((cat) => (
                <div key={cat.key} className="space-y-1.5">
                  <h4 className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.technical_skills[cat.key].map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                      >
                        <Sparkles className="w-3 h-3 text-indigo-500" />
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(cat.key, skill)}
                          className="text-slate-400 hover:text-rose-500 transition ml-0.5"
                          title="Remove skill"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white flex items-center gap-2 shadow-md shadow-indigo-500/25 transition"
            >
              <Check className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
