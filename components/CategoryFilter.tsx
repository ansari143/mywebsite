"use client";

import type { BlogCategory } from "@/data/blogs";

type CategoryFilterProps = {
  categories: BlogCategory[];
  activeCategory: "All" | BlogCategory;
  onChange: (category: "All" | BlogCategory) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange("All")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          activeCategory === "All"
            ? "bg-blue-600 text-white"
            : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? "bg-blue-600 text-white"
              : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
