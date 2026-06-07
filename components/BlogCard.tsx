import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-blue-100 via-white to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-4 opacity-95 transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">
              {post.category}
            </span>
            {post.popularUSA && (
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-slate-300">
                Popular in USA
              </span>
            )}
          </div>

          <h3 className="mt-4 line-clamp-2 text-lg font-semibold leading-7 text-slate-900 dark:text-slate-100">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {post.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-300 dark:text-slate-300">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
