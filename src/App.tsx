import React from 'react';
import { useProfile } from './hooks/useProfile';
import { useTheme } from './context/ThemeContext';
import { ProfileDashboard } from './components/profile/ProfileDashboard';
import { 
  Download, 
  Code2, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Sun,
  Moon,
  Briefcase,
  Layers,
  GraduationCap,
  Sparkles,
  Phone
} from 'lucide-react';

export const App: React.FC = () => {
  const { isLoaded, profile } = useProfile();
  const { theme, toggleTheme } = useTheme();

  const RESUME_PDF_URL = "https://drive.google.com/file/d/1QMiu2THjXEVTN8fYv0vFzj0UMjBhNTxU/view?usp=drive_link";

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-indigo-600 dark:text-cyan-400">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <span className="font-semibold tracking-wide">Loading Portfolio...</span>
        </div>
      </div>
    );
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen pb-20 text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-100 selection:text-indigo-950 dark:selection:bg-cyan-400 dark:selection:text-slate-950">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/20 flex-shrink-0 text-white">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                  {profile.personal.name}
                </span>
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 hidden md:inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Roles
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Frontend Software Engineer | React & React Native (Expo) Specialist
              </p>
            </div>
          </div>

          {/* Action Links & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hosted Resume Link */}
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white flex items-center gap-1.5 transition shadow-sm shadow-indigo-500/25"
              title="Open Hosted PDF Resume in Google Drive"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
              <ExternalLink className="w-3 h-3 opacity-70 hidden sm:inline" />
            </a>

            {/* GitHub */}
            <a
              href={profile.personal.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.personal.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-600/10 dark:hover:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Contact Email */}
            <a
              href={`mailto:${profile.personal.email}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
              <span>Email</span>
            </a>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Quick In-Page Anchor Navigation */}
      <nav className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-16 z-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => scrollToSection('about')}
            className="px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition flex items-center gap-1.5 flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition flex items-center gap-1.5 flex-shrink-0"
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>Featured Projects</span>
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className="px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition flex items-center gap-1.5 flex-shrink-0"
          >
            <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
            <span>Experience</span>
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className="px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition flex items-center gap-1.5 flex-shrink-0"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Skills Hub</span>
          </button>

          <button
            onClick={() => scrollToSection('education')}
            className="px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition flex items-center gap-1.5 flex-shrink-0"
          >
            <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
            <span>Education & Credentials</span>
          </button>
        </div>
      </nav>

      {/* Main Portfolio Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ProfileDashboard resumePdfUrl={RESUME_PDF_URL} />
      </main>

      {/* Portfolio Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {profile.personal.name}
          </span>{' '}
          • {profile.personal.title}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 dark:text-cyan-400 font-semibold hover:underline flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            <span>Hosted Resume (PDF)</span>
          </a>
          <span>•</span>
          <a
            href={`mailto:${profile.personal.email}`}
            className="hover:text-indigo-600 dark:hover:text-cyan-400 transition"
          >
            {profile.personal.email}
          </a>
          <span>•</span>
          <a
            href={`tel:${profile.personal.phone}`}
            className="hover:text-indigo-600 dark:hover:text-cyan-400 transition flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>{profile.personal.phone}</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
