export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudyListItem {
  title: string;
  description: string;
}

export interface CaseStudyStat {
  value: number;
  suffix?: string;
  label: string;
}

export interface CaseStudyFlowStep {
  title: string;
  description: string;
}

export interface CaseStudyTimelineItem {
  date: string;
  title: string;
  description: string;
  done?: boolean;
}

export interface CaseStudyScreenshot {
  src: string;
  title: string;
  description: string;
  tags: string[];
  side: "client" | "admin";
}

export const atsCaseStudy = {
  badge: "Completed",
  brand: "RecruitMint",
  title: "Applicant Tracking System",
  subtitle: "Capstone Project Portfolio Showcase",
  notice:
    "This project is currently not deployed online. This page serves as a portfolio showcase demonstrating the features, architecture, and development work behind the Applicant Tracking System capstone project.",
  overview: {
    description:
      "A comprehensive web-based platform designed to streamline and digitize the recruitment process for local companies. Built with Laravel following the MVC architecture and Prototyping methodology.",
    meta: [
      { label: "Lead Developer", value: "Liam Flores" },
      { label: "Architecture", value: "Model-View-Controller" },
      { label: "Methodology", value: "Prototyping" },
      { label: "Type", value: "Web Platform" },
    ] satisfies CaseStudyMeta[],
  },
  team: {
    adviser: "Ms. Jenelyn Aranas",
    collaborators: ["Jenny Mae Araneta", "Jaleel Nicole De Guzman"],
  },
  techStack: [
    { category: "Framework & Language", items: ["Laravel", "PHP 8.2"] },
    { category: "Database", items: ["PostgreSQL"] },
    { category: "Frontend", items: ["Bootstrap 5", "jQuery", "AJAX", "Chart.js", "Tabler.io"] },
    { category: "Deployment", items: ["Heroku", "Laravel Forge"] },
  ],
  deployment: [
    { title: "Source Code", description: "Git repository pushed to deployment pipeline" },
    { title: "Laravel Forge", description: "Server management and SSL configuration" },
    { title: "Heroku Cloud", description: "Auto-scaling cloud hosting platform" },
    { title: "PostgreSQL", description: "Managed production database" },
  ] satisfies CaseStudyFlowStep[],
  timeline: [
    {
      date: "June 3, 2024",
      title: "Project Start",
      description: "Requirements gathering, system analysis, and initial planning phase.",
    },
    {
      date: "August 2024",
      title: "Development",
      description: "Core features implementation, database design, and system architecture.",
    },
    {
      date: "October 2024",
      title: "Testing",
      description: "Bug fixes, user acceptance testing, and performance optimization.",
    },
    {
      date: "December 13, 2024",
      title: "Completed",
      description: "Final deployment, documentation, and project submission.",
      done: true,
    },
  ] satisfies CaseStudyTimelineItem[],
  timelineStats: [
    { value: 6, suffix: "+", label: "Months Duration" },
    { value: 100, suffix: "%", label: "Completed" },
    { value: 4, label: "Team Members" },
  ] satisfies CaseStudyStat[],
  objectives: [
    { title: "Streamline Application Process", description: "Digitize and automate the entire applicant registration and tracking workflow." },
    { title: "Real-time Status Tracking", description: "Provide applicants with instant updates on their application progress." },
    { title: "Secure Data Management", description: "Implement role-based access control and secure storage." },
    { title: "Analytics & Reporting", description: "Generate comprehensive reports and insights for administrators." },
    { title: "Automated Notifications", description: "Send email and SMS alerts for important application milestones." },
    { title: "Document Management", description: "Automated document verification, storage, and retrieval system." },
  ] satisfies CaseStudyListItem[],
  features: [
    { title: "Resume Parsing", description: "Extract and analyze key information from resumes." },
    { title: "Candidate Ranking", description: "Intelligent ranking based on job requirements." },
    { title: "Evaluation Test", description: "Online assessment and skill testing." },
    { title: "Evaluation Form", description: "Comprehensive HR evaluation forms." },
    { title: "Status Tracking", description: "Real-time application monitoring." },
    { title: "Analytics Dashboard", description: "Hiring statistics and visual insights." },
    { title: "Add Job", description: "Job posting and management interface." },
    { title: "Communication Hub", description: "Centralized messaging system." },
    { title: "Candidate Dashboard", description: "Personalized applicant portal." },
    { title: "Feedback Form", description: "User feedback collection and management." },
  ] satisfies CaseStudyListItem[],
  screenshots: [
    { src: "/images/capstone/authentication.png", title: "Authentication Page", description: "Login and registration with role-based redirection.", tags: ["Login", "Registration"], side: "client" },
    { src: "/images/capstone/signup.png", title: "Sign Up Form", description: "New users can create accounts to access system features.", tags: ["Registration", "Account Creation"], side: "client" },
    { src: "/images/capstone/email-verification.png", title: "Email Verification", description: "Laravel's built-in verification system.", tags: ["Laravel Mail", "Verification"], side: "client" },
    { src: "/images/capstone/services1.png", title: "Services Page", description: "Services and product features with navigation to careers.", tags: ["Services", "CTA"], side: "client" },
    { src: "/images/capstone/careers1.png", title: "Careers Page", description: "Available job openings and employment details.", tags: ["Job Listings", "Work Arrangements"], side: "client" },
    { src: "/images/capstone/contact.png", title: "Contact Page", description: "Contact form and location map.", tags: ["Feedback", "Map"], side: "client" },
    { src: "/images/capstone/appform.png", title: "Application Form", description: "Job application with document upload.", tags: ["Job Details", "Resume Upload"], side: "client" },
    { src: "/images/capstone/appstatus2.png", title: "Application Status", description: "Real-time application progress tracking.", tags: ["Tracking", "Status"], side: "client" },
    { src: "/images/capstone/joblisting.png", title: "Job Listing Page", description: "Browse and manage all available job postings.", tags: ["Job Listings", "Admin"], side: "admin" },
    { src: "/images/capstone/editjob.png", title: "Edit Job Page", description: "Update job details, requirements, and status.", tags: ["Edit", "Job Posts"], side: "admin" },
    { src: "/images/capstone/deletejob.png", title: "Delete Job", description: "Remove job postings with confirmation dialog.", tags: ["Delete", "Confirmation"], side: "admin" },
    { src: "/images/capstone/summary.png", title: "Candidate Info Page", description: "Complete candidate profile with resume, notes, and status.", tags: ["Candidate", "Profile"], side: "admin" },
    { src: "/images/capstone/resumedisplay.png", title: "Resume Display", description: "View parsed resume data and documents.", tags: ["Resume", "Display"], side: "admin" },
    { src: "/images/capstone/notes.png", title: "Notes Tab", description: "Internal notes and annotations for applicants.", tags: ["Notes", "Annotations"], side: "admin" },
    { src: "/images/capstone/appstatus.png", title: "Application Status Tab", description: "Track and update application progress.", tags: ["Status", "Tracking"], side: "admin" },
    { src: "/images/capstone/feedback1.png", title: "Feedback Page", description: "View and respond to user feedback.", tags: ["Feedback", "Responses"], side: "admin" },
    { src: "/images/capstone/activity.png", title: "Activity Page", description: "System activity logs and audit trail.", tags: ["Activity", "Logs"], side: "admin" },
    { src: "/images/capstone/candidateranking.png", title: "Candidate Ranking", description: "Intelligent candidate ranking and comparison.", tags: ["Ranking", "Scoring"], side: "admin" },
    { src: "/images/capstone/evaluation1.png", title: "Evaluation Form", description: "Manage evaluation tests and scoring.", tags: ["Tests", "Scoring"], side: "admin" },
    { src: "/images/capstone/analytics1.png", title: "Analytics Page", description: "Hiring statistics, charts, and reports.", tags: ["Charts", "Reports"], side: "admin" },
  ] satisfies CaseStudyScreenshot[],
  highlights: [
    { value: 6, suffix: "+", label: "Months Development" },
    { value: 4, label: "Team Members" },
    { value: 10, suffix: "+", label: "Technologies" },
    { value: 10, suffix: "+", label: "Key Features" },
    { value: 20, suffix: "+", label: "Screenshots" },
  ] satisfies CaseStudyStat[],
  footer: "© 2024 Liam Flores — Applicant Tracking System Capstone Project",
};
