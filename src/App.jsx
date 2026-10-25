import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiLink2, FiMoon, FiSun } from 'react-icons/fi';
import { BsFiletypePdf } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
import TypeWriter from './components/TypeWriter';

const certifications = [
  { name: 'FinOps Certified Practitioner', badge: 'finops.svg' },
  { name: 'AWS Certified Solutions Architect Associate', badge: 'aws-solutions-architect.svg' },
  { name: 'AWS Certified Cloud Practitioner', badge: 'aws-cloud-practitioner.svg' },
  { name: 'Certified SAFe® 6 Agilist', badge: 'safe.svg' },
  { name: 'Dynatrace Associate', badge: 'dynatrace.svg' },
  { name: 'Lean Six Sigma Yellow Belt', badge: 'six-sigma.svg' },
  { name: 'Certified ScrumMaster (CSM)', badge: 'scrum.svg' },
  { name: 'Blue Prism Certified Developer - AD01', badge: 'blue-prism.svg' },
  { name: 'ITIL v3', badge: 'itil.svg' },
];

export default function RohanSite() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rshah-theme') === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });

  useEffect(() => {
    try { localStorage.setItem('rshah-theme', theme); } catch { /* storage can be unavailable */ }
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.body.dataset.theme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#111827' : '#f9fafb');
  }, [theme]);

  const links = [
    { href: 'https://www.linkedin.com/in/rc-shah/', label: 'LinkedIn', icon: <FiLinkedin /> },
    { href: 'mailto:rohanc.shah28@gmail.com', label: 'Email', icon: <FiMail /> },
    { href: '/resume.pdf', label: 'Résumé', icon: <BsFiletypePdf /> },
    { href: '#blogs', label: 'Blogs', icon: <IoBulbOutline /> },
  ];

  return (
    <div className={`site-shell relative min-h-screen flex flex-col ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <header className="max-w-3xl mx-auto w-full p-6 md:px-8 flex justify-between items-center">
        <div>
          <a href="/" className="font-mono text-xl">rshah.me</a>
        </div>
        <nav className="flex items-center space-x-3">
          {links.map((l) => {
            const isHashLink = l.href.startsWith('#');
            return (
              <a
                key={l.label}
                href={l.href}
                className="site-nav-link inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm"
                {...(!isHashLink && { target: "_blank", rel: "noreferrer" })}
                onClick={(e) => {
                  if (isHashLink) {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="text-lg">{l.icon}</span>
                <span className="hidden sm:inline">{l.label}</span>
              </a>
            );
          })}
          <button type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-toggle inline-flex items-center justify-center rounded-full p-2 transition-colors">
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <section className="max-w-3xl mx-auto p-6 md:p-10">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-mono leading-tight">Rohan Shah</h1>
            <p className="mt-3 text-xl font-mono site-muted">Director, Solutions Engineering • Observability Advocate</p>
          {/*
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a className="font-mono inline-block px-5 py-3 rounded-md bg-blue-600 text-white font-medium" href="mailto:rohanc.shah28@gmail.com">Get in touch</a>
              <a className="font-mono inline-block px-5 py-3 rounded-md border border-gray-200 text-gray-800" href="/resume.pdf">Download résumé</a>
            </div>
          */}

            <div>
              <h4 className="mt-6 text-lg md:text-lg font-mono leading-tight text-blue-600">About</h4>
              <p className="mt-3 text-md font-mono site-body-text">With a strong background in driving digital transformation and enhancing system reliability, I am passionate for innovating solutions that reduce toil and increase efficiency.</p>
              <p className="mt-3 text-md font-mono site-body-text">After a decade of experience in the financial industry, I deeply understand the value of observability and proudly advocate for its transformative impact on organizations.</p>
             </div>
            <div className="site-panel mt-10 font-mono rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-mono mb-2 text-blue-600">~/now</h2>
              <TypeWriter
                text={`SSpecializing in Log management & analytics at scale, driving complex sales wins, mentoring and enabling field engineers, advising customers, and influencing product and brand strategy.`}
                speed={30}
              />
            </div>

            <section id="blogs">
              <div className="site-panel mt-10 rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-mono text-blue-600 flex items-center gap-2"><IoBulbOutline />Blogs</h2>
              {/* blog content */}
              <ul className="mt-3 list-disc list-inside site-body-text space-y-2">
                <li>
                <a href="https://medium.com/@rshah.me/platform-agnostic-observability-freedom-or-fantasy-d0e740b3c9a1" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Platform Agnostic Observability: Freedom or Fantasy?
                </a>
                </li>

                <li>
                <a href="https://medium.com/@rshah.me/build-or-buy-the-cost-of-reinventing-observability-0883a5f252d8" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Build or buy: The Cost of Reinventing Observability
                </a>
                </li>

                <li>
                <a href="https://medium.com/@rshah.me/from-buzzwords-to-basics-5e230fb48a43" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    From buzzwords to basics
                </a>
                </li>

                <li>
                <a href="https://medium.com/@rshah.me/paradigm-shift-in-observability-ae9de34bc955" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Paradigm shift in observability
                </a>
                </li>

                <li>
                <a href="https://www.dynatrace.com/news/blog/insights-into-your-azure-devops-pipelines/" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Insights into your Azure DevOps pipelines
                </a>
                </li>
              </ul>
              </div>
            </section>


            <section className="site-panel mt-6 font-mono rounded-lg shadow-lg p-6" aria-labelledby="certifications-title">
              <h2 id="certifications-title" className="text-lg font-mono text-blue-600">Certifications</h2>
              <div className="certification-grid mt-5">
                {certifications.map(({ name, badge }) => (
                  <div className="certification-item" key={name}>
                    <img className="certification-badge" src={`/badges/${badge}`} alt="" />
                    <p className="certification-name site-body-text">{name}</p>
                  </div>
                ))}
              </div>
            </section>
            <div className="site-panel mt-6 rounded-lg p-6">
              <h2 className="text-lg font-mono text-blue-600">Skills</h2>
              <div className="skills-groups mt-5">
                {[
                  ['Business', ['Strategic Sales', 'Mergers & Acquisitions', 'Go-to-Market Strategy', 'FinOps', 'Executive Advisory']],
                  ['Leadership', ['Solutions Engineering Leadership', 'Field Enablement', 'Team Development & Mentorship', 'Technical Strategy']],
                  ['Technical', ['Observability', 'AI Observability', 'Log Management & Analytics', 'Solution Architecture', 'SRE', 'Chaos Engineering']],
                ].map(([group, skills]) => (
                  <div key={group}>
                    <h3 className="mb-2 text-sm font-mono text-blue-600">{group}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => <span key={skill} className="font-mono text-sm px-3 py-1 site-chip rounded-full">{skill}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="site-panel mt-10 font-mono rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-mono text-blue-600 flex items-center gap-2"><FiLink2 />Featured Content</h2>
            <ul className="mt-3 list-disc list-inside site-body-text space-y-2">
                <li>
                <a href="https://lnkd.in/p/gaSWNFum" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    SKO 2026 - President’s Club Award
                </a>
                </li>
                <li>
                <a href="https://www.dynatrace.com/perform/on-demand/perform-2026/?utm_source=google&amp;utm_medium=cpc&amp;utm_term=dynatrace%20perform%202026&amp;utm_campaign=noram-p2-all-en-brand-tcpa&amp;utm_content=none&amp;utm_campaign_id=424005127&amp;gad_source=1&amp;gad_campaignid=424005127&amp;gbraid=0AAAAADk5-tWb5ycA8IuL4P4VjX2xiU878&amp;session=ai-powered-log-monitoring-precision-at-petabyte-scale#sessions" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Perform 2026 - AI-powered log monitoring at petabyte-scale precision
                </a>
                </li>
                <li>
                    <a href="https://www.dynatrace.com/perform/on-demand/perform-2025/?_location=ALL&topics=Automation&industries=ALL&jobTitles=ALL&level=ALL&track=ALL&session=from-alerts-to-action-with-red-hat-and-dynatrace" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Perform 2025 - From alerts to answers with Red Hat & Dynatrace
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/posts/rohan-shah-sre_proudtoworkatbmo-activity-7158972987197562880-CKrg" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Perform 2024 - Dynatrace Lead R&D Award
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/posts/rohan-shah-sre_ansible-dynatrace-ansibleautomates-activity-7186805598636683264-jV_i?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Ansible Automates 2024 - Automated remediation using Dynatrace
                </a>
                </li>
                <li>
                <a href="https://www.dynatrace.com/info/series/bank-of-montreal-digital-first-strategy/" target="_blank" rel="noopener noreferrer" className="font-mono site-content-link hover:underline">
                    Dynatrace Webinar - BMO's digital first strategy
                </a>
                </li>

            </ul>
            </div>
            <footer className="mt-10 text-sm site-muted">© {new Date().getFullYear()} Rohan Shah</footer>
          </motion.div>
        </section>
      </main>

      <div className="bg-gradient-to-r from-transparent to-transparent p-4"></div>
    </div>
  );
}
