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

  // Helper to check if a string has actual content
  const hasContent = (val?: string) => val && val.trim().length > 0;

  return (
    <div className="bg-background rounded-lg min-h-screen p-4 sm:p-10 font-sans text-foreground antialiased border transition-colors duration-300">
      <div className="max-w-2xl mx-auto text-left">
        {/* Header */}
        <header className="flex justify-between items-start mb-10 gap-4">
          <div className="space-y-2">
            {hasContent(resume.personalInfo.name) && (
              <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                {resume.personalInfo.name}
              </h1>
            )}

            {hasContent(resume.personalInfo.title) && (
              <p className="text-lg text-muted-foreground font-medium">
                {resume.personalInfo.title}
              </p>
            )}

            <div className="text-sm text-muted-foreground/70 flex flex-wrap gap-x-4 mt-3">
              {hasContent(resume.personalInfo.location) && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> {resume.personalInfo.location}
                </span>
              )}
              {hasContent(resume.personalInfo.phone) && (
                <span className="flex items-center gap-1.5">
                  <Phone size={14} /> {resume.personalInfo.phone}
                </span>
              )}
              {hasContent(resume.personalInfo.email) && (
                <span className="flex items-center gap-1.5">
                  <Mail size={14} /> {resume.personalInfo.email}
                </span>
              )}
            </div>

            {/* Social Links conditional block */}
            {(linkedInUrl || githubUrl || websiteUrl) && (
              <div className="flex gap-3 pt-3">
                {linkedInUrl && (
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Linkedin size={18} strokeWidth={2} />
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Github size={18} strokeWidth={2} />
                  </a>
                )}
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Globe size={18} strokeWidth={2} />
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="w-24 h-24 rounded-xl bg-muted border border-border shrink-0"></div>
        </header>

        {/* About */}
        {hasContent(resume.summary) && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3 border-b pb-1 border-border">
              About
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed tracking-tight">
              {resume.summary}
            </p>
          </section>
        )}

        {/* Skills */}
        {(resume.skills.languages.length > 0 ||
          resume.skills.frameworksAndTools.length > 0) && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 border-b pb-1 border-border">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                ...resume.skills.languages,
                ...resume.skills.frameworksAndTools,
              ].map(
                (skill, idx) =>
                  hasContent(skill) && (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ),
              )}
            </div>
          </section>
        )}

        {/* Work Experience */}
        {resume.experience.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-5 border-b pb-1 border-border">
              Work Experience
            </h2>
            <div className="space-y-8">
              {resume.experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold tracking-tight">
                      {exp.company}
                    </h3>
                    {(hasContent(exp.startDate) || hasContent(exp.endDate)) && (
                      <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                        {exp.startDate}{" "}
                        {hasContent(exp.endDate) && `— ${exp.endDate}`}
                      </span>
                    )}
                  </div>
                  {hasContent(exp.position) && (
                    <p className="text-[15px] text-primary font-medium italic">
                      {exp.position}
                    </p>
                  )}
                  {exp.description.length > 0 && (
                    <ul className="list-disc ml-5 mt-2 space-y-2">
                      {exp.description.map(
                        (bullet, idx) =>
                          hasContent(bullet) && (
                            <li
                              key={idx}
                              className="text-[14px] text-muted-foreground leading-normal"
                            >
                              {bullet}
                            </li>
                          ),
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {resume.projects.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-5 border-b pb-1 border-border">
              Projects
            </h2>
            <div className="space-y-8">
              {resume.projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold tracking-tight">
                      {project.name}
                    </h3>
                    {(hasContent(project.startDate) ||
                      hasContent(project.endDate)) && (
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.startDate}{" "}
                        {hasContent(project.endDate) && `— ${project.endDate}`}
                      </span>
                    )}
                  </div>
                  {hasContent(project.link) && (
                    <p className="text-[13px] text-primary font-mono hover:underline cursor-pointer truncate max-w-sm">
                      {project.link}
                    </p>
                  )}
                  {project.description.length > 0 && (
                    <ul className="list-disc ml-5 space-y-2">
                      {project.description.map(
                        (bullet, idx) =>
                          hasContent(bullet) && (
                            <li
                              key={idx}
                              className="text-[14px] text-muted-foreground leading-normal"
                            >
                              {bullet}
                            </li>
                          ),
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 border-b pb-1 border-border">
              Education
            </h2>
            <div className="space-y-6">
              {resume.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{edu.university}</h3>
                    <div className="text-[15px] text-muted-foreground">
                      {edu.degree}{" "}
                      {hasContent(edu.branch) && `in ${edu.branch}`}
                    </div>
                    {hasContent(edu.sgpa) && (
                      <p className="text-sm font-medium text-primary">
                        SGPA: {edu.sgpa}
                      </p>
                    )}
                  </div>
                  {(hasContent(edu.startDate) || hasContent(edu.endDate)) && (
                    <span className="text-muted-foreground text-xs font-mono whitespace-nowrap bg-muted px-2 py-0.5 rounded">
                      {edu.startDate}{" "}
                      {hasContent(edu.endDate) && `- ${edu.endDate}`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
