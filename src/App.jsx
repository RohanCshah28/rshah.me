import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiLink2 } from 'react-icons/fi';
import { BsFiletypePdf } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
import TypeWriter from './components/TypeWriter';

export default function RohanSite() {
  const links = [
    { href: 'https://www.linkedin.com/in/rohan-shah-sre/', label: 'LinkedIn', icon: <FiLinkedin /> },
    { href: 'mailto:rohanc.shah28@gmail.com', label: 'Email', icon: <FiMail /> },
    { href: '/resume.pdf', label: 'Résumé', icon: <BsFiletypePdf /> },
    { href: '#blogs', label: 'Blogs', icon: <IoBulbOutline /> },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 flex flex-col">
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm hover:bg-gray-200"
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
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <section className="max-w-3xl mx-auto p-6 md:p-10">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-mono leading-tight">Rohan Shah</h1>
            <p className="mt-3 text-xl font-mono text-gray-600">Principal Solutions Engineer • Observability Advocate</p>
          {/* 
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a className="font-mono inline-block px-5 py-3 rounded-md bg-blue-600 text-white font-medium" href="mailto:rohanc.shah28@gmail.com">Get in touch</a>
              <a className="font-mono inline-block px-5 py-3 rounded-md border border-gray-200 text-gray-800" href="/resume.pdf">Download résumé</a>
            </div>
          */}

            <div>
              <h4 className="mt-6 text-lg md:text-lg font-mono leading-tight text-blue-600">About</h4>
              <p className="mt-3 text-md font-mono text-black-600">With a strong background in driving digital transformation and enhancing system reliability, I am passionate for innovating solutions that reduce toil and increase efficiency.</p>
              <p className="mt-3 text-md font-mono text-black-600">After a decade of experience in the financial industry, I deeply understand the value of observability and proudly advocate for its transformative impact on organizations.</p>
             </div>
            <div className="mt-10 bg-white font-mono border border-black-600 rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-mono mb-2 text-blue-600">~/now</h2>
              <TypeWriter
                text={`SSpecializing in Log management & analytics at scale, driving complex sales wins, mentoring and enabling field engineers, advising customers, and influencing product and brand strategy.`}
                speed={30}
              />
            </div>

            <div className="mt-10 bg-white font-mono border border-black-600 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-mono text-blue-600 flex items-center gap-2"><FiLink2 />Featured Content</h2>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>
                <a href="https://www.dynatrace.com/perform/on-demand/perform-2025/?_location=ALL&topics=Automation&industries=ALL&jobTitles=ALL&level=ALL&track=ALL&session=from-alerts-to-action-with-red-hat-and-dynatrace" target="_blank" rel="noopener noreferrer" className="font-mono text-black-600 hover:underline">
                    Perform 2025 - From alerts to answers with Red Hat & Dynatrace
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/posts/rohan-shah-sre_proudtoworkatbmo-activity-7158972987197562880-CKrg" target="_blank" rel="noopener noreferrer" className="font-mono text-black-600 hover:underline">
                    Perform 2024 - Dynatrace Lead R&D Award
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/posts/rohan-shah-sre_ansible-dynatrace-ansibleautomates-activity-7186805598636683264-jV_i?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="font-mono text-black-600 hover:underline">
                    Ansible Automates 2024 - Automated remediation using Dynatrace
                </a>
                </li>
                <li>
                <a href="https://www.dynatrace.com/info/series/bank-of-montreal-digital-first-strategy/" target="_blank" rel="noopener noreferrer" className="font-mono text-black-600 hover:underline">
                    Dynatrace Webinar - BMO's digital first strategy
                </a>
                </li>

            </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-mono text-blue-600">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Observability', 'Log Management & Analytics','Solution Architect', 'SRE', 'FinOps', 'Kubernetes', 'Chaos Engineering', 'DevOps', 'CI/CD'].map((s) => (
                  <span key={s} className="font-mono text-sm px-3 py-1 bg-gray-100 rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <section id="blogs">
              <div className="mt-10 bg-white border border-gray-100 rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-mono text-blue-600 flex items-center gap-2"><IoBulbOutline />Blogs</h2>
              {/* blog content */}
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>
                <a href="https://medium.com/@rohanc.shah28/paradigm-shift-in-observability-ae9de34bc955" target="_blank" rel="noopener noreferrer" className="font-mono text-black-600 hover:underline">
                    Paradigm shift in observability
                </a>
                </li>
                
                <li>
                <a href="https://www.dynatrace.com/news/blog/insights-into-your-azure-devops-pipelines/" target="_blank" rel="noopener noreferrer" className="font-mono text-black-600 hover:underline">
                    Insights into your Azure DevOps pipelines
                </a>
                </li>
              </ul>
              </div>
            </section>


            <footer className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Rohan Shah</footer>
          </motion.div>
        </section>
      </main>

      <div className="bg-gradient-to-r from-transparent to-transparent p-4"></div>
    </div>
  );
}
