"use client";

import { normalizeUrl } from "@/lib/helpers";
import { Resume } from "@/lib/types";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import AnimatedIconButton from "./AnimatedBtn";
import EyeIcon from "./ui/eye-icon";
import PenIcon from "./ui/pen-icon";

type Props = { resume: Resume };

export default function ResumeEditor() {
  // const resume = useResumeStore((s) => s.resume);
  // console.log(resume);
  const resume = {
    personalInfo: {
      name: "Utkarsh Upadhyay",
      title: "B.Tech Computer Science undergraduate",
      location: "Lucknow, India",
      phone: "+91 8303769534",
      email: "uutkarsh952@gmail.com",
      website: "",
      linkedin: "linkedin.com/in/utkarsh2005",
      github: "github.com/upadhyayutkarsh2005",
    },
    summary:
      "B.Tech Computer Science undergraduate with strong expertise in Machine Learning and Generative AI, including LLMs, RAG pipelines, agentic workflows, and model fine-tuning. Experienced in designing and deploying end-to-end AI systems using FastAPI backends, scalable APIs, and production-oriented ML pipelines. Passionate about building intelligent, real-world AI applications.",
    skills: {
      languages: ["Python", "Java", "C"],
      frameworksAndTools: [
        "PyTorch",
        "scikit-learn",
        "Hugging Face",
        "OpenCV",
        "FastAPI",
        "Flask",
        "REST APIs",
        "Streamlit",
        "MongoDB",
        "SQL",
        "Git",
        "Docker",
        "Postman",
        "AWS",
        "GCP",
        "VS Code",
        "n8n",
      ],
      softSkills: [],
    },
    experience: [
      {
        company: "Kreativetimebox",
        position: "Python & ML Intern",
        location: "Hyderabad, India",
        startDate: "May 2025",
        endDate: "Sept 2025",
        isCurrentRole: false,
        description: [
          "Built and deployed production ML pipelines for structured data extraction and processing.",
          "Exposed fraud detection, classification, and anomaly detection models via FastAPI and REST APIs.",
          "Optimized model inference and deployments using Agile and Git-based workflows.",
        ],
        technologies: ["Python", "ML", "FastAPI", "REST APIs", "Agile", "Git"],
      },
      {
        company: "FalkomeAI",
        position: "Generative AI Intern",
        location: "Maharashtra, India",
        startDate: "Nov 2025",
        endDate: "Present",
        isCurrentRole: true,
        description: [
          "Built an LLM-powered AI agent for ISP customer support and technical troubleshooting.",
          "Fine-tuned Mistral LLM for domain-specific intent classification and query resolution.",
          "Implemented a RAG pipeline using embeddings and vector databases for context-aware responses.",
        ],
        technologies: [
          "LLM",
          "Mistral",
          "RAG",
          "embeddings",
          "vector databases",
        ],
      },
    ],
    projects: [
      {
        name: "DigiSanjeevani",
        role: "",
        startDate: "",
        endDate: "",
        description: [
          "Developed a full-stack AI-powered healthcare platform featuring symptom analysis, medical report parsing, doctor booking, chatbot, and hospital locator.",
          "Integrated LLM-based medical insights using Gemini API with FastAPI backend and MongoDB for structured health data storage.",
        ],
        technologies: ["AI", "healthcare", "Gemini API", "FastAPI", "MongoDB"],
        link: "GitHub",
      },
      {
        name: "SmartDoc Parser – Invoice & Bank Statement Extraction",
        role: "",
        startDate: "",
        endDate: "",
        description: [
          "Developed a scalable document intelligence pipeline for extracting structured data from financial documents.",
          "Integrated OCR (DocTr, PaddleOCR) with LLM-driven JSON extraction for layout-agnostic parsing.",
          "Reduced third-party API dependency through custom model fine-tuning.",
        ],
        technologies: ["OCR", "DocTr", "PaddleOCR", "LLM", "JSON extraction"],
        link: "GitHub",
      },
    ],
    education: [
      {
        university: "A.P.J Abdul Kalam Technical University",
        degree: "B.Tech",
        branch: "Computer Science and Engineering",
        location: "Lucknow, UP",
        sgpa: "",
        startDate: "2022",
        endDate: "2026",
      },
      {
        university: "S.R Global School",
        degree: "",
        branch: "",
        location: "",
        sgpa: "",
        startDate: "2018",
        endDate: "2022",
      },
    ],
    extracurricular: [
      "GDG On Campus Oct 2023 – July 2025",
      "Event Management Co-lead BIET Lucknow — Led and organized technical events with cross-department participation",
    ],
    customSections: [
      {
        title: "Certifications",
        items: [
          "AWS Cloud Practitioner Essentials",
          "Google Cloud Study Jams (GDG)",
          "Java Web Development Program with AI (HCLTech)",
        ],
      },
    ],
  };

  if (!resume) return <p>error</p>;

  return (
    <div>
      <div className="flex tracking-wide justify-start gap-2.5 max-sm:w-full md:w-[80vw] max-sm:px-6">
        <AnimatedIconButton icon={<EyeIcon className="-me-0.5" />}>
          Preview
        </AnimatedIconButton>
        <AnimatedIconButton icon={<PenIcon />}>Edit</AnimatedIconButton>
      </div>
      <div className="min-h-screen justify-center flex py-12 px-4">
        <ResumeCard resume={resume} />
      </div>
    </div>
  );
}

const ResumeCard = ({ resume }: Props) => {
  const githubUrl = normalizeUrl(resume.personalInfo.github);
  const linkedInUrl = normalizeUrl(resume.personalInfo.linkedin);
  const websiteUrl = normalizeUrl(resume.personalInfo.website);
  return (
    <div className="bg-white rounded-lg min-h-screen p-4 sm:p-10 font-sans text-black antialiased border shadow-sm">
      <div className="max-w-2xl mx-auto text-left">
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter leading-none">
              {resume.personalInfo.name}
            </h1>
            <p className="text-[15px] text-gray-600 font-medium">
              {resume.personalInfo.title}
            </p>
            <div className="text-[12px] text-gray-400 flex flex-wrap gap-x-3 mt-2">
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {resume.personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone size={12} /> {resume.personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail size={12} /> {resume.personalInfo.email}
              </span>
              {resume.personalInfo.website && (
                <span className="flex items-center gap-1">
                  <Globe size={12} /> {resume.personalInfo.website}
                </span>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              {/* LinkedIn */}
              {linkedInUrl && (
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-black hover:border-gray-400 transition-colors"
                >
                  <Linkedin size={14} strokeWidth={2.5} />
                </a>
              )}

              {/* GitHub */}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-black hover:border-gray-400 transition-colors"
                >
                  <Github size={14} strokeWidth={2.5} />
                </a>
              )}

              {/* Website/Portfolio */}
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-black hover:border-gray-400 transition-colors"
                >
                  <Globe size={14} strokeWidth={2.5} />
                </a>
              )}
            </div>
          </div>
          <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 shrink-0"></div>
        </header>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">About</h2>
          <p className="text-[13px] text-gray-500 leading-relaxed tracking-tight">
            {resume.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {[
              ...resume.skills.languages,
              ...resume.skills.frameworksAndTools,
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-black text-white text-[10px] rounded-md font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Work Experience - NEW SECTION */}
        {resume.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              {resume.experience.map((exp, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[14px] font-bold tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-[12px] text-gray-600 italic leading-none">
                    {exp.position}
                  </p>
                  <ul className="list-disc ml-4 mt-2 space-y-1">
                    {exp.description.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-[12px] text-gray-500 leading-normal"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Projects</h2>
          <div className="space-y-6">
            {resume.projects.map((project, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[14px] font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {project.startDate} — {project.endDate}
                  </span>
                </div>
                <p className="text-[11px] text-blue-600 font-mono truncate max-w-xs">
                  {project.link}
                </p>
                <ul className="list-disc ml-4 space-y-1">
                  {project.description.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-[12px] text-gray-500 leading-normal"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education - Updated to handle Array */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Education</h2>
          <div className="space-y-4">
            {resume.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <div>
                  <h3 className="text-[14px] font-bold">{edu.university}</h3>
                  <p className="text-[12px] text-gray-600">
                    {edu.degree} in {edu.branch} • {edu.sgpa} SGPA
                  </p>
                </div>
                <span className="text-gray-400 text-[10px] font-mono whitespace-nowrap">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Sections (Dynamic Other Data) */}
        {resume.customSections?.map((section, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-lg font-bold mb-3">{section.title}</h2>
            <div className="flex flex-wrap gap-2">
              {section.items.map((item, i) => (
                <span
                  key={i}
                  className="text-[12px] text-gray-500 border-l-2 border-gray-100 pl-3"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}

        {/* Extracurricular */}
        {resume.extracurricular.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-3">Extracurricular</h2>
            <ul className="space-y-2">
              {resume.extracurricular.map((item, idx) => (
                <li
                  key={idx}
                  className="text-[12px] text-gray-500 border-l-2 border-gray-100 pl-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};
