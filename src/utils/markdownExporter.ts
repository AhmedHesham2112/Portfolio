import { CandidateProfile } from '../types/profile';

export const generateMarkdownResume = (profile: CandidateProfile): string => {
  const { personal, summary, target_roles, technical_skills, experience, projects, education, certifications, languages } = profile;

  let md = `# ${personal.name}\n`;
  md += `**${target_roles.join(' | ')}**\n\n`;
  md += `📍 Location: ${personal.location} | ✉️ Email: ${personal.email} | 📞 Phone: ${personal.phone}\n`;

  const linkParts: string[] = [];
  if (personal.links.github) linkParts.push(`[GitHub](${personal.links.github})`);
  if (personal.links.linkedin) linkParts.push(`[LinkedIn](${personal.links.linkedin})`);
  if (personal.links.portfolio) linkParts.push(`[Portfolio](${personal.links.portfolio})`);
  if (linkParts.length > 0) {
    md += `🔗 Links: ${linkParts.join(' • ')}\n`;
  }
  md += `\n---\n\n`;

  md += `## Professional Summary\n${summary}\n\n`;

  md += `## Technical Skills\n`;
  md += `- **Frontend & Mobile:** ${technical_skills.frontend_core.join(', ')}\n`;
  md += `- **State & Data Management:** ${technical_skills.state_and_data.join(', ')}\n`;
  md += `- **Graphics & Canvas:** ${technical_skills.canvas_and_graphics.join(', ')}\n`;
  md += `- **Languages:** ${technical_skills.languages.join(', ')}\n`;
  md += `- **Tools & Platforms:** ${technical_skills.tools_and_platforms.join(', ')}\n\n`;

  md += `## Work Experience\n\n`;
  experience.forEach((exp) => {
    md += `### ${exp.role} — **${exp.company}**\n`;
    md += `*${exp.period}*\n`;
    if (exp.tech_stack && exp.tech_stack.length > 0) {
      md += `*Tech Stack:* ${exp.tech_stack.join(', ')}\n`;
    }
    md += `\n`;
    exp.highlights.forEach((h) => {
      md += `- ${h}\n`;
    });
    md += `\n`;
  });

  if (projects.length > 0) {
    md += `## Featured Projects\n\n`;
    projects.forEach((proj) => {
      md += `### ${proj.name}\n`;
      if (proj.tech_stack.length > 0) {
        md += `*Tech Stack:* ${proj.tech_stack.join(', ')}\n`;
      }
      if (proj.live_url || proj.github_url) {
        const pLinks: string[] = [];
        if (proj.live_url) pLinks.push(`[Live Demo](${proj.live_url})`);
        if (proj.github_url) pLinks.push(`[Source Code](${proj.github_url})`);
        md += `*Links:* ${pLinks.join(' | ')}\n`;
      }
      md += `\n`;
      proj.highlights.forEach((h) => {
        md += `- ${h}\n`;
      });
      md += `\n`;
    });
  }

  md += `## Education\n\n`;
  education.forEach((edu) => {
    md += `- **${edu.degree}** — ${edu.institution || ''} (${edu.period})\n`;
    if (edu.details) md += `  ${edu.details}\n`;
  });
  md += `\n`;

  if (certifications.length > 0) {
    md += `## Certifications\n\n`;
    certifications.forEach((c) => {
      md += `- ${c}\n`;
    });
    md += `\n`;
  }

  if (languages.length > 0) {
    md += `## Languages\n\n`;
    languages.forEach((l) => {
      md += `- ${l.language} (${l.proficiency})\n`;
    });
    md += `\n`;
  }

  return md;
};
