import React, { createContext, useState, useEffect, useCallback } from 'react';
import { CandidateProfile } from '../types/profile';
import { defaultCandidateProfile } from '../data/defaultProfile';

export const PROFILE_STORAGE_KEY = 'bmad_candidate_profile';

export interface ProfileContextType {
  profile: CandidateProfile;
  updateProfile: (updater: Partial<CandidateProfile> | ((prev: CandidateProfile) => CandidateProfile)) => void;
  resetProfile: () => void;
  exportProfileJSON: () => string;
  importProfileJSON: (jsonString: string) => { success: boolean; error?: string };
  isLoaded: boolean;
}

export const ProfileContext = createContext<ProfileContextType | null>(null);

export const getStorage = (): Storage | null => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }
  if (typeof globalThis !== 'undefined' && (globalThis as any).localStorage) {
    return (globalThis as any).localStorage;
  }
  return null;
};

export const loadStoredProfile = (): CandidateProfile => {
  const storage = getStorage();
  if (!storage) {
    return defaultCandidateProfile;
  }
  try {
    const raw = storage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) {
      return defaultCandidateProfile;
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && parsed.personal && parsed.technical_skills) {
      // Auto-migrate if stored profile lacks updated projects or new title
      const hasUpdatedProjects = parsed.projects?.some((p: any) => p.id === 'proj-canvas' || p.id === 'proj-sbs');
      const hasUpdatedTitle = parsed.personal?.title === defaultCandidateProfile.personal.title;
      
      if (!hasUpdatedProjects || !hasUpdatedTitle || parsed.personal?.location !== 'Cairo, Egypt') {
        const merged: CandidateProfile = {
          ...defaultCandidateProfile,
          ...parsed,
          personal: {
            ...defaultCandidateProfile.personal,
            ...parsed.personal,
            title: defaultCandidateProfile.personal.title,
            location: defaultCandidateProfile.personal.location,
            links: {
              ...defaultCandidateProfile.personal.links,
              ...parsed.personal?.links,
            },
          },
          summary: defaultCandidateProfile.summary,
          technical_skills: defaultCandidateProfile.technical_skills,
          experience: defaultCandidateProfile.experience,
          projects: defaultCandidateProfile.projects,
          education: defaultCandidateProfile.education,
          certifications: defaultCandidateProfile.certifications,
          languages: defaultCandidateProfile.languages,
        };
        storage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
      return parsed as CandidateProfile;
    }
    console.warn('[ProfileContext] Stored profile schema incomplete. Falling back to default.');
    return defaultCandidateProfile;
  } catch (err) {
    console.warn('[ProfileContext] Failed to parse stored profile JSON. Resetting to default.', err);
    return defaultCandidateProfile;
  }
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<CandidateProfile>(defaultCandidateProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initial = loadStoredProfile();
    setProfile(initial);
    setIsLoaded(true);
  }, []);

  const updateProfile = useCallback((updater: Partial<CandidateProfile> | ((prev: CandidateProfile) => CandidateProfile)) => {
    setProfile((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      try {
        const storage = getStorage();
        if (storage) {
          storage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(next));
        }
      } catch (err) {
        console.error('[ProfileContext] Failed to write profile to localStorage:', err);
      }
      return next;
    });
  }, []);

  const resetProfile = useCallback(() => {
    try {
      const storage = getStorage();
      if (storage) {
        storage.removeItem(PROFILE_STORAGE_KEY);
      }
    } catch (err) {
      console.error('[ProfileContext] Failed to clear localStorage key:', err);
    }
    setProfile(defaultCandidateProfile);
  }, []);

  const exportProfileJSON = useCallback(() => {
    return JSON.stringify(profile, null, 2);
  }, [profile]);

  const importProfileJSON = useCallback((jsonString: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object' || !parsed.personal || !parsed.technical_skills) {
        return { success: false, error: 'Invalid profile format: Missing personal info or skills.' };
      }
      setProfile(parsed as CandidateProfile);
      const storage = getStorage();
      if (storage) {
        storage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(parsed));
      }
      return { success: true };
    } catch (err) {
      return { success: false, error: (err as Error).message || 'Invalid JSON format.' };
    }
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        resetProfile,
        exportProfileJSON,
        importProfileJSON,
        isLoaded,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
