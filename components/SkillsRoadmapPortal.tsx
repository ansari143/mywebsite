"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type {
  CareerRoadmap,
  ResourceProvider,
} from "@/data/aiCareerRoadmaps";

type SeoSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type SkillsRoadmapPortalProps = {
  roadmaps: CareerRoadmap[];
  seoSections: SeoSection[];
  faqItems: FaqItem[];
  disclaimer: string;
};

const RESOURCE_TABS: ResourceProvider[] = [
  "Udemy",
  "LinkedIn Learning",
];

const providerToKey: Record<ResourceProvider, keyof CareerRoadmap["resources"]> = {
  Udemy: "Udemy",
  "LinkedIn Learning": "LinkedIn Learning",
};

export default function SkillsRoadmapPortal({
  roadmaps,
  seoSections,
  faqItems,
  disclaimer,
}: SkillsRoadmapPortalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(roadmaps[0]?.id ?? null);
  const [activeResourceTab, setActiveResourceTab] = useState<Record<string, ResourceProvider>>(
    Object.fromEntries(roadmaps.map((roadmap) => [roadmap.id, "Udemy"])) as Record<
      string,
      ResourceProvider
    >,
  );

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(roadmaps.map((roadmap) => roadmap.category)))],
    [roadmaps],
  );

  const filteredRoadmaps = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();

    return roadmaps.filter((roadmap) => {
      const byCategory = categoryFilter === "All" || roadmap.category === categoryFilter;
      const byRole = roleFilter === "All Roles" || roadmap.futureRole === roleFilter;

      if (!normalized) {
        return byCategory && byRole;
      }

      const haystack = [
        roadmap.currentRole,
        roadmap.futureRole,
        roadmap.careerOverview,
        roadmap.skillsNeeded.join(" "),
        roadmap.toolsUsed.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return byCategory && byRole && haystack.includes(normalized);
    });
  }, [roadmaps, categoryFilter, roleFilter, searchQuery]);

  const scrollToSection = (id: string) => {
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_15%_10%,rgba(186,230,253,0.35),transparent_35%),radial-gradient(circle_at_95%_5%,rgba(191,219,254,0.4),transparent_30%),linear-gradient(140deg,#0b1f44_0%,#112f63_45%,#16428e_100%)] p-6 text-white shadow-sm sm:p-10 dark:border-slate-700">
        <div className="relative z-10 mx-auto max-w-6xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-[#15233d]/10 px-4 py-1 text-sm font-semibold tracking-wide">
            AI Career Guidance Portal
          </div>

          <div className="inline-flex items-center rounded-full border border-emerald-200/60 bg-emerald-500/20 px-4 py-1 text-sm font-semibold text-emerald-100">
            🚀 Future Ready 2026
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              AI Skills Roadmap for Modern Careers
            </h1>
            <p className="max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              Learn step-by-step roadmaps to transform traditional careers into AI-driven careers.
            </p>
          </div>

          <div className="grid gap-4 rounded-2xl border border-white/20 bg-[#15233d]/10 p-4 backdrop-blur md:grid-cols-[2fr_1fr_1fr]">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-blue-100">
                Search roadmap
              </span>
              <input
                suppressHydrationWarning
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by role, skills, tools, or overview"
                className="w-full rounded-xl border border-white/30 bg-[#15233d]/95 px-4 py-3 text-sm text-white outline-none ring-blue-300 transition focus:ring dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-blue-100">
                Role filter
              </span>
              <select
                suppressHydrationWarning
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
                className="w-full rounded-xl border border-white/30 bg-[#15233d]/95 px-4 py-3 text-sm text-white outline-none ring-blue-300 transition focus:ring dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100"
              >
                <option>All Roles</option>
                {roadmaps.map((roadmap) => (
                  <option key={roadmap.id} value={roadmap.futureRole}>
                    {roadmap.futureRole}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-blue-100">
                Career categories
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    suppressHydrationWarning
                    key={category}
                    type="button"
                    onClick={() => setCategoryFilter(category)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      categoryFilter === category
                        ? "border-white bg-[#15233d] text-blue-900"
                        : "border-white/30 bg-[#15233d]/10 text-white hover:bg-[#15233d]/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">Role tabs</p>
            <div className="flex flex-wrap gap-2">
              {filteredRoadmaps.map((roadmap) => (
                <button
                  suppressHydrationWarning
                  key={`tab-${roadmap.id}`}
                  type="button"
                  onClick={() => {
                    setExpandedRoleId(roadmap.id);
                    scrollToSection("roadmaps");
                  }}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    expandedRoleId === roadmap.id
                      ? "border-white bg-[#15233d] text-blue-900"
                      : "border-white/30 bg-[#15233d]/10 text-white hover:bg-[#15233d]/20"
                  }`}
                  aria-label={`Open ${roadmap.futureRole} roadmap`}
                >
                  {roadmap.futureRole}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => scrollToSection("roadmaps")}
              className="rounded-xl bg-[#15233d] px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-[#15233d]"
            >
              Explore Roadmaps
            </button>
            <Link
              href="/blog"
              className="rounded-xl border border-white/35 bg-[#15233d]/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15233d]/20"
            >
              View Blogs
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/35 bg-[#15233d]/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15233d]/20"
            >
              Contact Us
            </Link>
          </div>

          <nav className="flex flex-wrap gap-2" aria-label="Smooth navigation">
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => scrollToSection("roadmaps")}
              className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-blue-100 transition hover:bg-[#15233d]/15"
            >
              Roadmaps
            </button>
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => scrollToSection("seo-content")}
              className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-blue-100 transition hover:bg-[#15233d]/15"
            >
              Career Guidance
            </button>
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => scrollToSection("faq")}
              className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-blue-100 transition hover:bg-[#15233d]/15"
            >
              FAQ
            </button>
          </nav>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100">
        <p>{disclaimer}</p>
      </section>

      <section
        id="roadmaps"
        className="scroll-mt-24 space-y-6 rounded-3xl border border-slate-200 bg-[#15233d]/70 p-4 backdrop-blur-sm sm:p-6 dark:border-slate-700 dark:bg-slate-950/70"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl dark:text-slate-100">AI Career Roadmaps</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-white dark:text-slate-300">
              Explore role-specific pathways with educational milestones, suggested tools, practice projects, and resource placeholders.
            </p>
          </div>
          <p className="rounded-full border border-slate-300 bg-[#15233d] px-3 py-1 text-xs font-semibold text-white dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-100">
            {filteredRoadmaps.length} role roadmap{filteredRoadmaps.length === 1 ? "" : "s"} matched
          </p>
        </div>

        {filteredRoadmaps.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-6 text-sm text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            No roadmaps matched your search and filters. Adjust role, category, or search terms.
          </div>
        ) : null}

        <div className="space-y-5">
          {filteredRoadmaps.map((roadmap) => {
            const selectedTab = activeResourceTab[roadmap.id] ?? "Udemy";
            const selectedResources = roadmap.resources[providerToKey[selectedTab]];

            return (
              <article key={roadmap.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-[#15233d] shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() =>
                    setExpandedRoleId((current) => (current === roadmap.id ? null : roadmap.id))
                  }
                  className="flex w-full items-center justify-between gap-3 bg-gradient-to-r from-slate-50 via-white to-blue-50 px-5 py-4 text-left dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 dark:text-slate-300">
                      {roadmap.currentRole} to {roadmap.futureRole}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white dark:text-slate-100">{roadmap.futureRole}</h3>
                    <p className="mt-2 inline-flex rounded-full border border-emerald-200 bg-[#15233d] px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                      🚀 Future Ready 2026
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-300 bg-[#15233d] px-3 py-1 text-xs font-semibold text-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {expandedRoleId === roadmap.id ? "Collapse" : "Expand"}
                  </span>
                </button>

                {expandedRoleId === roadmap.id ? (
                  <div className="space-y-6 p-5 sm:p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-800">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 dark:text-slate-300">Current Role</p>
                        <p className="mt-2 text-sm font-semibold text-white dark:text-slate-100">{roadmap.currentRole}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-800">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 dark:text-slate-300">Future Role</p>
                        <p className="mt-2 text-sm font-semibold text-white dark:text-slate-100">{roadmap.futureRole}</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                      <h4 className="text-base font-semibold text-white dark:text-slate-100">Career Overview</h4>
                      <p className="mt-2 text-sm leading-7 text-white dark:text-slate-300">{roadmap.careerOverview}</p>
                      {roadmap.id === "ai-engineer" ? (
                        <div className="mt-4 rounded-2xl border border-blue-100 bg-[#15233d] p-4 dark:border-blue-700 dark:bg-blue-900/30">
                          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">
                            Recommended next step
                          </p>
                          <p className="mt-2 text-sm leading-7 text-white dark:text-slate-300">
                            If you are starting the AI Engineer path, begin with AI Agents to understand tool use, step-by-step reasoning, and practical workflow design.
                          </p>
                          <Link
                            href="/skills/ai-agents"
                            className="mt-3 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                          >
                            Explore AI Agents
                          </Link>
                        </div>
                      ) : null}
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                        <h4 className="text-base font-semibold text-white dark:text-slate-100">Skills Needed</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {roadmap.skillsNeeded.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-blue-200 bg-[#15233d] px-3 py-1 text-xs font-medium text-blue-800 dark:border-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                        <h4 className="text-base font-semibold text-white dark:text-slate-100">Estimated Duration</h4>
                        <p className="mt-2 text-sm leading-7 text-white dark:text-slate-300">{roadmap.learningTimeline}</p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">8-14 Weeks per role</p>
                        <div className="mt-4 space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 dark:text-slate-300">Progress Tracker</p>
                          {roadmap.skillLevels.map((level) => (
                            <div key={level.label}>
                              <div className="mb-1 flex items-center justify-between text-xs font-semibold text-white dark:text-slate-300">
                                <span className="rounded-full border border-slate-300 bg-[#15233d] px-2 py-0.5 dark:border-slate-600 dark:bg-slate-800">
                                  {level.label}
                                </span>
                                <span>{level.estimatedDuration}</span>
                              </div>
                              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
                                <div
                                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                                  style={{ width: `${level.percentage}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                        <h4 className="text-base font-semibold text-white dark:text-slate-100">Tools Used</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {roadmap.toolsUsed.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-emerald-200 bg-[#15233d] px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-slate-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                        <h4 className="text-base font-semibold text-white dark:text-slate-100">Recommended Certifications</h4>
                        <div className="mt-3 space-y-3">
                          {roadmap.recommendedCertifications.map((certification) => (
                            <div key={certification.name} className="rounded-xl border border-slate-200 bg-[#15233d] p-3 dark:border-slate-700 dark:bg-slate-800">
                              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{certification.name}</p>
                              <p className="mt-1 text-sm leading-6 text-white dark:text-slate-300">{certification.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                      <h4 className="text-base font-semibold text-white dark:text-slate-100">Roadmap Table</h4>
                      <div className="mt-4 overflow-x-auto">
                        <table className="min-w-[980px] border-collapse text-left text-sm">
                          <thead>
                            <tr className="bg-slate-100 text-white dark:bg-slate-800 dark:text-slate-300">
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Step</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Phase / Week</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Skill Area</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">What You Learn</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Why It Matters</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Recommended Resource</th>
                            </tr>
                          </thead>
                          <tbody>
                            {roadmap.roadmapSteps.map((step) => (
                              <tr key={`${roadmap.id}-${step.step}`} className="odd:bg-[#15233d] even:bg-[#15233d] dark:odd:bg-slate-900 dark:even:bg-slate-800/60">
                                <td className="border border-slate-200 px-3 py-2.5 font-semibold leading-6 text-slate-800 dark:border-slate-700/70 dark:text-slate-100">{step.step}</td>
                                <td className="border border-slate-200 px-3 py-2.5 leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{step.phase}</td>
                                <td className="border border-slate-200 px-3 py-2.5 leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{step.skillArea}</td>
                                <td className="border border-slate-200 px-3 py-2.5 leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{step.whatYouLearn}</td>
                                <td className="border border-slate-200 px-3 py-2.5 leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{step.whyItMatters}</td>
                                <td className="border border-slate-200 px-3 py-2.5 leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{step.recommendedResource}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                      <h4 className="text-base font-semibold text-white dark:text-slate-100">Recommended Learning Resources</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {RESOURCE_TABS.map((tab) => (
                          <button
                            suppressHydrationWarning
                            key={`${roadmap.id}-${tab}`}
                            type="button"
                            onClick={() =>
                              setActiveResourceTab((current) => ({
                                ...current,
                                [roadmap.id]: tab,
                              }))
                            }
                            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                              selectedTab === tab
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300 bg-[#15233d] text-white hover:bg-[#15233d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                        {selectedResources.map((resource) => (
                          <a
                            key={`${roadmap.id}-${selectedTab}-${resource.title}`}
                            href={resource.url}
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                            className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 transition hover:border-blue-300 hover:bg-[#15233d] dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-700"
                          >
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 dark:text-slate-300">
                              {resource.provider}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white dark:text-slate-100">{resource.title}</p>
                            <p className="mt-2 inline-flex rounded-full border border-slate-300 bg-[#15233d] px-2 py-0.5 text-xs font-semibold text-white dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
                              {resource.level}
                            </p>
                            <span className="mt-3 inline-flex rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                              Start Learning
                            </span>
                          </a>
                        ))}
                      </div>

                      <div className="mt-5 overflow-x-auto">
                        <table className="min-w-[760px] border-collapse text-left text-sm">
                          <thead>
                            <tr className="bg-slate-100 text-white dark:bg-slate-800 dark:text-slate-300">
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">#</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Course</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Level</th>
                              <th className="border border-slate-200 px-3 py-2.5 font-semibold dark:border-slate-700/70">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedResources.map((resource, resourceIndex) => (
                              <tr key={`${roadmap.id}-${selectedTab}-table-${resource.title}`} className="odd:bg-[#15233d] even:bg-[#15233d] dark:odd:bg-slate-900 dark:even:bg-slate-800/60">
                                <td className="border border-slate-200 px-3 py-2.5 font-semibold leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{resourceIndex + 1}</td>
                                <td className="border border-slate-200 px-3 py-2.5 leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{resource.title}</td>
                                <td className="border border-slate-200 px-3 py-2.5 leading-6 text-white dark:border-slate-700/70 dark:text-slate-300">{resource.level}</td>
                                <td className="border border-slate-200 px-3 py-2.5 dark:border-slate-700/70">
                                  <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="nofollow sponsored noopener noreferrer"
                                    className="inline-flex rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                                  >
                                    Start Learning
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-900">
                      <h4 className="text-base font-semibold text-white dark:text-slate-100">Final Capstone Project</h4>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {roadmap.practiceProjects.map((project) => (
                          <div
                            key={`${roadmap.id}-${project}`}
                            className="rounded-xl border border-indigo-200 bg-[#15233d] px-3 py-2 text-sm font-medium text-indigo-900 dark:border-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-200"
                          >
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 p-6 shadow-sm sm:p-8 dark:border-emerald-700 dark:from-emerald-900/30 dark:via-slate-900 dark:to-cyan-900/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white dark:text-slate-100">Become AI Driven</h2>
            <p className="mt-2 text-sm leading-7 text-white dark:text-slate-300">
              Pick your role, start with beginner milestones, and move to capstone delivery with a portfolio-ready roadmap.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Become AI Driven
          </Link>
        </div>
      </section>

      <section id="seo-content" className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-200 bg-[#15233d] p-6 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-900">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl dark:text-slate-100">AI Career Guidance Content</h2>
          <p className="mt-2 text-sm leading-7 text-white dark:text-slate-300">
            Use this educational guidance to understand role transitions and choose a roadmap that matches your current baseline.
          </p>
        </div>

        {seoSections.map((section) => (
          <article key={section.id} className="rounded-2xl border border-slate-200 bg-[#15233d] p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-xl font-semibold text-white dark:text-slate-100">{section.title}</h3>
            <div className="mt-3 space-y-4 text-sm leading-8 text-white dark:text-slate-300">
              {section.paragraphs.map((paragraph) => (
                <p key={`${section.id}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm sm:p-8 dark:border-blue-700 dark:from-blue-900/30 dark:via-slate-900 dark:to-indigo-900/30">
        <h2 className="text-2xl font-bold text-white dark:text-slate-100">Internal Guidance Links</h2>
        <p className="mt-2 text-sm leading-7 text-white dark:text-slate-300">
          Explore more educational resources and guidance pages.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/blog" className="rounded-xl border border-slate-300 bg-[#15233d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#15233d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Blog
          </Link>
          <Link href="/contact" className="rounded-xl border border-slate-300 bg-[#15233d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#15233d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Contact
          </Link>
          <Link href="/practice-tests" className="rounded-xl border border-slate-300 bg-[#15233d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#15233d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Practice Tests
          </Link>
          <Link href="/career-guidance" className="rounded-xl border border-slate-300 bg-[#15233d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#15233d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Career Guidance
          </Link>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-[#15233d] p-6 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-white dark:text-slate-100">Frequently Asked Questions</h2>
        <div className="mt-5 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-base font-semibold text-white dark:text-slate-100">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-white dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
