import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

type BlogCardProps = {
  post: BlogPost;
};

const categoryVisuals: Record<
  BlogPost["category"],
  { icon: string; from: string; to: string; text: string }
> = {
  "Study in USA": {
    icon: "🎓",
    from: "from-blue-100",
    to: "to-cyan-100",
    text: "USA Study Guide",
  },
  "USA Careers": {
    icon: "💼",
    from: "from-emerald-100",
    to: "to-teal-100",
    text: "Career Pathway",
  },
  "AI & Tech Careers": {
    icon: "🤖",
    from: "from-violet-100",
    to: "to-indigo-100",
    text: "AI and Tech",
  },
  "Student Life": {
    icon: "📚",
    from: "from-amber-100",
    to: "to-orange-100",
    text: "Student Success",
  },
  "Study Abroad": {
    icon: "🌍",
    from: "from-sky-100",
    to: "to-blue-100",
    text: "Global Study",
  },
  "Entrance Exams": {
    icon: "📝",
    from: "from-rose-100",
    to: "to-pink-100",
    text: "Exam Prep",
  },
  Scholarships: {
    icon: "🏆",
    from: "from-yellow-100",
    to: "to-amber-100",
    text: "Funding Guide",
  },
  "Career Guidance": {
    icon: "🧭",
    from: "from-slate-100",
    to: "to-blue-100",
    text: "Career Guidance",
  },
};

export default function BlogCard({ post }: BlogCardProps) {
  const useTopicCover = post.coverImage === "/logo.png" || post.coverImage.includes("logo");
  const visual = categoryVisuals[post.category];

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        {useTopicCover ? (
          <div
            className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${visual.from} via-white ${visual.to}`}
          >
            <div className="absolute inset-0 p-5">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600">
                {visual.text}
              </div>
              <div className="mt-4 text-3xl" aria-hidden="true">
                {visual.icon}
              </div>
              <p className="mt-3 line-clamp-2 max-w-xs text-sm font-semibold text-slate-700">
                {post.title}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-blue-100 via-white to-indigo-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain p-4 opacity-95 transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {post.category}
            </span>
            {post.popularUSA && (
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Popular in USA
              </span>
            )}
          </div>

          <h3 className="mt-4 line-clamp-2 text-lg font-semibold leading-7 text-slate-900">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
            {post.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
