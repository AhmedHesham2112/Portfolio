import { defaultCandidateProfile } from '../data/defaultProfile.js';
import { loadStoredProfile, PROFILE_STORAGE_KEY } from '../context/ProfileContext.js';
import { generateMarkdownResume } from '../utils/markdownExporter.js';

// Mock localStorage in Node environment
const mockStorage: Record<string, string> = {};
(globalThis as any).window = {
  localStorage: {
    getItem: (key: string) => mockStorage[key] || null,
    setItem: (key: string, val: string) => { mockStorage[key] = val; },
    removeItem: (key: string) => { delete mockStorage[key]; },
    clear: () => {
      for (const k in mockStorage) delete mockStorage[k];
    }
  }
};

let passed = 0;
let failed = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    console.log(`  ✓ ${msg}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${msg}`);
    failed++;
  }
}

console.log('Running Matrix Test Audit for Story 1.3 Profile Store & Exporter...\n');

// 1. First Load Scenario
console.log('Test 1: First Load with empty storage');
(globalThis as any).window.localStorage.clear();
const loaded1 = loadStoredProfile();
assert(loaded1.personal.name === "Ahmed Hesham Khattab", 'Loads default name correctly');
assert(loaded1.target_roles.length === 3, 'Loads 3 target roles');
assert(loaded1.technical_skills.frontend_core.includes('ReactJS'), 'Includes ReactJS in skills');
assert(loaded1.experience.length >= 2, 'Loads experience history');

// 2. Storage Update Scenario (Adding skill)
console.log('\nTest 2: Profile Update persistence (adding GraphQL skill)');
const customProfile = {
  ...defaultCandidateProfile,
  technical_skills: {
    ...defaultCandidateProfile.technical_skills,
    state_and_data: [...defaultCandidateProfile.technical_skills.state_and_data, 'GraphQL']
  }
};
(globalThis as any).window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(customProfile));
const loaded2 = loadStoredProfile();
assert(loaded2.technical_skills.state_and_data.includes('GraphQL'), 'Persists new skill GraphQL');

// 3. Markdown Resume Exporter
console.log('\nTest 3: Markdown Resume Exporter');
const resumeMd = generateMarkdownResume(loaded2);
assert(resumeMd.includes('# Ahmed Hesham Khattab'), 'Markdown contains full candidate name');
assert(resumeMd.includes('GraphQL'), 'Markdown includes newly added skills');
assert(resumeMd.includes('## Work Experience'), 'Markdown contains work experience section');

// 4. Corrupted JSON Storage Recovery
console.log('\nTest 4: Malformed JSON storage recovery');
(globalThis as any).window.localStorage.setItem(PROFILE_STORAGE_KEY, "INVALID_NON_JSON_STRING{{{");
const loaded3 = loadStoredProfile();
assert(loaded3.personal.name === "Ahmed Hesham Khattab", 'Recovers from corrupted storage without crashing');

console.log(`\nResults: ${passed} passed, ${failed} failed.\n`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('All Profile Store & Exporter edge cases passed successfully.');
}
