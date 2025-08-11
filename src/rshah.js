import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

export default function RohanSite() {
  const links = [
    { href: 'https://www.linkedin.com/in/rohan-shah-sre/', label: 'LinkedIn', icon: <FiLinkedin /> },
    { href: 'mailto:rohanc.shah28@gmail.com', label: 'Email', icon: <FiMail /> },
    { href: '/resume.pdf', label: 'Résumé', icon: <FiDownload /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="max-w-3xl mx-auto w-full p-6 md:px-8 flex justify-between items-center">
        <div>
          <a href="/" className="font-semibold text-lg">rshah.me</a>
        </div>
        <nav className="flex items-center space-x-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm hover:bg-gray-100" target="_blank" rel="noreferrer">
              <span className="text-lg">{l.icon}</span>
              <span className="hidden sm:inline">{l.label}</span>
            </a>
          ))}
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <section className="max-w-3xl mx-auto p-6 md:p-10">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Rohan Shah</h1>
            <p className="mt-3 text-lg text-gray-600">Principal Solutions Engineer • SRE & Observability Advocate • Toronto</p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a className="inline-block px-5 py-3 rounded-md bg-blue-600 text-white font-medium" href="mailto:rohanc.shah28@gmail.com">Get in touch</a>
              <a className="inline-block px-5 py-3 rounded-md border border-gray-200 text-gray-800" href="/resume.pdf">Download résumé</a>
            </div>

            <div className="mt-10 bg-white border border-gray-100 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="mt-3 text-gray-700">With a strong background in driving digital transformation and enhancing system reliability, I am passionate for innovating solutions that reduce toil and increase efficiency. After spending a decade in the financial industry, I know the value observability brings to an organization, and pride myself in being an observability advocate.</p>
            </div>
            <div className="mt-10 bg-white border border-gray-100 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold">Achievements and Awards</h2>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>
                <a href="https://www.dynatrace.com/perform/on-demand/perform-2025/?_location=ALL&topics=Automation&industries=ALL&jobTitles=ALL&level=ALL&track=ALL&session=from-alerts-to-action-with-red-hat-and-dynatrace" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Perform 2025 - From alerts to answers with Red Hat and Dynatrace
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/posts/rohan-shah-sre_proudtoworkatbmo-activity-7158972987197562880-CKrg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Perform 2024 - Dynatrace Lead R&D Award
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/posts/rohan-shah-sre_ansible-dynatrace-ansibleautomates-activity-7186805598636683264-jV_i?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Ansible Automates 2024 - Automated remediation using Ansible and Dynatrace
                </a>
                </li>
                <li>
                <a href="https://www.dynatrace.com/info/series/bank-of-montreal-digital-first-strategy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Dynatrace Webinar - BMO's digital first strategy
                </a>
                </li>
                <li>
                <a href="https://www.dynatrace.com/news/blog/insights-into-your-azure-devops-pipelines/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Blog - Insights into your Azure DevOps pipelines
                </a>
                </li>
            </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-600 uppercase">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Solution Architect', 'SRE', 'FinOps', 'Kubernetes', 'Observability', 'Chaos Engineering', 'DevOps', 'CI/CD'].map((s) => (
                  <span key={s} className="text-sm px-3 py-1 bg-gray-100 rounded-full">{s}</span>
                ))}
              </div>
            </div>

            <footer className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Rohan Shah</footer>
          </motion.div>
        </section>
      </main>

      <div className="bg-gradient-to-r from-transparent to-transparent p-4">
      </div>
    </div>
  );
}
