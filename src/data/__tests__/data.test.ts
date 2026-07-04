import { describe, expect, it } from "vitest";
import { hero } from "../hero";
import { stats } from "../stats";
import { experience } from "../experience";
import { testimonials } from "../testimonials";
import { techStack } from "../techStack";
import { education } from "../education";
import { projects } from "../projects";
import { creativeWork } from "../creativeWork";
import { hobbies } from "../hobbies";
import { contact } from "../contact";
import { atsCaseStudy } from "../caseStudies/ats";
import { budgetTrackerCaseStudy } from "../caseStudies/budgetTracker";

describe("homepage data", () => {
  it("hero has non-empty name, subtitle, and 3 meta rows", () => {
    expect(hero.name.length).toBeGreaterThan(0);
    expect(hero.subtitle.length).toBeGreaterThan(0);
    expect(hero.roles.length).toBeGreaterThan(0);
    expect(hero.meta).toHaveLength(3);
  });

  it("stats has exactly 4 entries with positive values", () => {
    expect(stats).toHaveLength(4);
    stats.forEach((s) => expect(s.value).toBeGreaterThan(0));
  });

  it("experience has 4 roles, all with role/company/period", () => {
    expect(experience).toHaveLength(4);
    experience.forEach((e) => {
      expect(e.role.length).toBeGreaterThan(0);
      expect(e.company.length).toBeGreaterThan(0);
      expect(e.period.length).toBeGreaterThan(0);
    });
  });

  it("testimonials has exactly 8 quotes", () => {
    expect(testimonials).toHaveLength(8);
    testimonials.forEach((t) => expect(t.quote.length).toBeGreaterThan(0));
  });

  it("techStack has 3 categories covering 16 tools", () => {
    expect(techStack).toHaveLength(3);
    const total = techStack.reduce((sum, group) => sum + group.items.length, 0);
    expect(total).toBe(16);
  });

  it("education has one entry", () => {
    expect(education).toHaveLength(1);
  });

  it("projects has 5 entries", () => {
    expect(projects).toHaveLength(5);
  });

  it("creativeWork has 14 Digital Art and 8 OJT Graphics images", () => {
    expect(creativeWork.filter((c) => c.category === "Digital Art")).toHaveLength(14);
    expect(creativeWork.filter((c) => c.category === "OJT Graphics")).toHaveLength(8);
  });

  it("hobbies has 6 entries", () => {
    expect(hobbies).toHaveLength(6);
  });

  it("contact has an access key and at least 3 links", () => {
    expect(contact.web3formsAccessKey.length).toBeGreaterThan(0);
    expect(contact.links.length).toBeGreaterThanOrEqual(3);
  });
});

describe("case study data", () => {
  it("ATS has 6 objectives, 10 features, and 20 screenshots", () => {
    expect(atsCaseStudy.objectives).toHaveLength(6);
    expect(atsCaseStudy.features).toHaveLength(10);
    expect(atsCaseStudy.screenshots).toHaveLength(20);
  });

  it("Budget Tracker has 3 problem points and 6 key features", () => {
    expect(budgetTrackerCaseStudy.problem).toHaveLength(3);
    expect(budgetTrackerCaseStudy.keyFeatures).toHaveLength(6);
  });
});
